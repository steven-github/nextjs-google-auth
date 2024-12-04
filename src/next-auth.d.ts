import "next-auth";

declare module "next-auth" {
    interface Session {
        user?: {
            id?: string; // Extend the user object with an id
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}
