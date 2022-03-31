import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IPrismaContext } from 'src/lib/interfaces/IPrismaContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
  /** Date custom scalar type */
  Date: any;
};

/** Create user input */
export type CreateProjectInput = {
  /** The project token */
  description: Scalars['String'];
  /** The project token */
  limitCollaborators: Scalars['Int'];
  /** The project name */
  name: Scalars['String'];
  /** The project token */
  token: Scalars['String'];
  /** The project userId */
  userId: Scalars['String'];
};

/** Create user input */
export type CreateUserInput = {
  /** The users email */
  email: Scalars['String'];
  /** The users firstname */
  firstname: Scalars['String'];
  /** The users lastname */
  lastname: Scalars['String'];
  /** The users password */
  password: Scalars['String'];
};

/** Delete user input */
export type DeleteProjectInput = {
  /** The project id */
  id: Scalars['String'];
};

/** Delete projects input */
export type DeleteProjectsInput = {
  /** The projects id */
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create project */
  createProject?: Maybe<Project>;
  /** Create user */
  createUser?: Maybe<User>;
  /** Delete project */
  deleteProject?: Maybe<Project>;
  /** Delete project */
  deleteProjects?: Maybe<Projects>;
  /** SignIn user */
  signInUser?: Maybe<User>;
  /** Update project */
  updateProject?: Maybe<Project>;
};


export type MutationCreateProjectArgs = {
  input?: InputMaybe<CreateProjectInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteProjectArgs = {
  input?: InputMaybe<DeleteProjectInput>;
};


export type MutationDeleteProjectsArgs = {
  input?: InputMaybe<DeleteProjectsInput>;
};


export type MutationSignInUserArgs = {
  input?: InputMaybe<SignInInput>;
};


export type MutationUpdateProjectArgs = {
  input?: InputMaybe<UpdateProjectInput>;
};

/** A project */
export type Project = {
  __typename?: 'Project';
  /** created date of project */
  createdAt?: Maybe<Scalars['Date']>;
  /** name of project */
  id?: Maybe<Scalars['String']>;
  /** name of project */
  name?: Maybe<Scalars['String']>;
  /** token of invite user */
  token?: Maybe<Scalars['String']>;
  /** created date of project */
  updatedAt?: Maybe<Scalars['Date']>;
  /** user of project */
  user?: Maybe<User>;
  /** userId of project */
  userId?: Maybe<Scalars['String']>;
};

/** An array of projects ids */
export type Projects = {
  __typename?: 'Projects';
  /** id of projects */
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all projects query */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** Get all users query */
  users?: Maybe<Array<Maybe<User>>>;
};

/** SignIn user input */
export type SignInInput = {
  /** The user email for signIn */
  email: Scalars['String'];
  /** The user password for signIn */
  password: Scalars['String'];
};

/** Update user input */
export type UpdateProjectInput = {
  /** The project description */
  description: Scalars['String'];
  /** The project id */
  id: Scalars['String'];
  /** The project limitCollaborators */
  limitCollaborators: Scalars['Int'];
  /** The project name */
  name: Scalars['String'];
  /** The project token */
  token: Scalars['String'];
  /** The project userId */
  userId: Scalars['String'];
};

/** A user */
export type User = {
  __typename?: 'User';
  /** email of user */
  email?: Maybe<Scalars['String']>;
  /** firstname of user */
  firstname?: Maybe<Scalars['String']>;
  /** id of user */
  id?: Maybe<Scalars['String']>;
  /** lastname of user */
  lastname?: Maybe<Scalars['String']>;
  /** password of user */
  password?: Maybe<Scalars['String']>;
  /** list of authors books */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** user token */
  token?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  CreateProjectInput: CreateProjectInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CreateUserInput: CreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DeleteProjectInput: DeleteProjectInput;
  DeleteProjectsInput: DeleteProjectsInput;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  Projects: ResolverTypeWrapper<Projects>;
  Query: ResolverTypeWrapper<{}>;
  SignInInput: SignInInput;
  UpdateProjectInput: UpdateProjectInput;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  CreateProjectInput: CreateProjectInput;
  String: Scalars['String'];
  Int: Scalars['Int'];
  CreateUserInput: CreateUserInput;
  Date: Scalars['Date'];
  DeleteProjectInput: DeleteProjectInput;
  DeleteProjectsInput: DeleteProjectsInput;
  Mutation: {};
  Project: Project;
  Projects: Projects;
  Query: {};
  SignInInput: SignInInput;
  UpdateProjectInput: UpdateProjectInput;
  User: User;
  Boolean: Scalars['Boolean'];
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, Partial<MutationCreateProjectArgs>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  deleteProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, Partial<MutationDeleteProjectArgs>>;
  deleteProjects?: Resolver<Maybe<ResolversTypes['Projects']>, ParentType, ContextType, Partial<MutationDeleteProjectsArgs>>;
  signInUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationSignInUserArgs>>;
  updateProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, Partial<MutationUpdateProjectArgs>>;
}>;

export type ProjectResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectsResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Projects'] = ResolversParentTypes['Projects']> = ResolversObject<{
  ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Projects?: ProjectsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

