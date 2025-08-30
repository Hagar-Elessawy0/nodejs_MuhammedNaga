import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { IPost } from "src/interfaces/post";

@Injectable()
export class PostsService {
    private posts: IPost[] = [
        { id: 1, title: "First Post", createdAt: new Date("2023-01-01") },
        { id: 2, title: "Second Post", createdAt: new Date("2023-01-02") },
        { id: 3, title: "Third Post", createdAt: new Date("2023-01-03") },
    ];

    create(createPostDto: CreatePostDto) {
        const newPost = {
            id: this.posts.length + 1,
            ...createPostDto,
            createdAt: new Date(),
        };
        this.posts.push(newPost);
        return { message: "Create Post", post: newPost };
    }

    findAll() {
        return this.posts;
    }

    findOne(id: number) {
        const post = this.posts.find((p) => p.id === id);
        return post || { message: `Post with id ${id} not found` };
    }

    update(id: number, updatePostDto: UpdatePostDto) {
        const postIndex = this.posts.findIndex((p) => p.id === id);
        if (postIndex > -1) {
            this.posts[postIndex] = {
                ...this.posts[postIndex],
                ...updatePostDto,
            };

            return {
                message: `Post with id ${id} updated`,
                post: this.posts[postIndex],
            };
        } else {
            return { message: `Post with id ${id} not found` };
        }
    }

    remove(id: number) {
        const postIndex = this.posts.findIndex((p) => p.id === id);
        if (postIndex > -1) {
            this.posts.splice(postIndex, 1);
            return { message: `Post with id ${id} deleted` };
        }
        return { message: `Post with id ${id} not found` };
    }
}
