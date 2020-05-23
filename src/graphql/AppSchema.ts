import { SchemeLoader } from "./SchemaLoader";
import { RoleResolver } from "./resolver/RoleResolver";
import { UserResolver } from "./resolver/user";

export const typeDefs = SchemeLoader();

export const resolvers = [
  RoleResolver,
  UserResolver
]