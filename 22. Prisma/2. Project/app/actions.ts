"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

//READ actions
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
        _count: {
          select: { comments: true, posts: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.log("Error fetching users: ", error);
    throw new Error("Failed to fetch users.");
  }
}

//GET posts
export async function getPosts(limit = 5) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: limit,
        },
      },
    });
    return posts;
  } catch (error) {
    console.log("Error fetching posts: ", error);
    throw new Error("Failed to fetch posts.");
  }
}

//Fetch user by Id
export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        posts: {
          orderBy: {
            createdAt: "desc",
          },
        },
        comments: {
          orderBy: {
            createdAt: "desc",
          },
          take: 10,
        },
        _count: {
          select: { comments: true, posts: true },
        },
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    console.log("Error fetching specific user : ", error);
    throw new Error("Failed to get user by Id.");
  }
}
export async function createUser({
  email,
  name,
}: {
  email: string;
  name?: string;
}) {
  if (!email) {
    throw new Error("Email is required");
  }

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    // Revalidate the home page to show the new user
    revalidatePath("/");

    return user;
  } catch (error) {
    // Handle duplicate email error
    const err = error as Error;
    if (err.cause === "P2002") {
      throw new Error("A user with this email already exists");
    }

    throw new Error("Failed to create user");
  }
}

// Post actions
export async function createPost({
  title,
  content,
  authorId,
  published = false,
}: {
  title: string;
  content?: string;
  authorId: string;
  published?: boolean;
}) {
  if (!title || !authorId) {
    throw new Error("Title and author are required");
  }

  try {
    // Ensure the author exists
    const authorExists = await prisma.user.findUnique({
      where: { id: authorId },
    });

    if (!authorExists) {
      throw new Error("Author not found");
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        author: {
          connect: { id: authorId },
        },
      },
      include: {
        author: true,
      },
    });

    // Revalidate the home page to show the new post
    revalidatePath("/");

    return post;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}

// Comment actions
export async function createComment({
  content,
  postId,
  authorId,
}: {
  content: string;
  postId: string;
  authorId: string;
}) {
  if (!content || !postId || !authorId) {
    throw new Error("Content, post, and author are required");
  }

  try {
    // Ensure both the post and author exist
    const postExists = await prisma.post.findUnique({
      where: { id: postId },
    });

    const authorExists = await prisma.user.findUnique({
      where: { id: authorId },
    });

    if (!postExists) {
      throw new Error("Post not found");
    }

    if (!authorExists) {
      throw new Error("Author not found");
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        post: {
          connect: { id: postId },
        },
        author: {
          connect: { id: authorId },
        },
      },
      include: {
        author: true,
        post: true,
      },
    });

    // Revalidate the home page to show the new comment
    revalidatePath("/");

    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
}
