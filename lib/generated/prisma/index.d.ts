
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model GalleryItem
 * 
 */
export type GalleryItem = $Result.DefaultSelection<Prisma.$GalleryItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notices
 * const notices = await prisma.notice.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Notices
   * const notices = await prisma.notice.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryItem`: Exposes CRUD operations for the **GalleryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryItems
    * const galleryItems = await prisma.galleryItem.findMany()
    * ```
    */
  get galleryItem(): Prisma.GalleryItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Notice: 'Notice',
    Post: 'Post',
    Event: 'Event',
    GalleryItem: 'GalleryItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "notice" | "post" | "event" | "galleryItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoticeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoticeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      GalleryItem: {
        payload: Prisma.$GalleryItemPayload<ExtArgs>
        fields: Prisma.GalleryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findFirst: {
            args: Prisma.GalleryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findMany: {
            args: Prisma.GalleryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          create: {
            args: Prisma.GalleryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          createMany: {
            args: Prisma.GalleryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          delete: {
            args: Prisma.GalleryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          update: {
            args: Prisma.GalleryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          deleteMany: {
            args: Prisma.GalleryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          upsert: {
            args: Prisma.GalleryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          aggregate: {
            args: Prisma.GalleryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryItem>
          }
          groupBy: {
            args: Prisma.GalleryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    notice?: NoticeOmit
    post?: PostOmit
    event?: EventOmit
    galleryItem?: GalleryItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    id: number | null
  }

  export type NoticeSumAggregateOutputType = {
    id: number | null
  }

  export type NoticeMinAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    category: string | null
    description: string | null
    mediaType: string | null
    mediaUrl: string | null
    accent: string | null
    createdAt: Date | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    category: string | null
    description: string | null
    mediaType: string | null
    mediaUrl: string | null
    accent: string | null
    createdAt: Date | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    title: number
    date: number
    category: number
    description: number
    mediaType: number
    mediaUrl: number
    accent: number
    createdAt: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    id?: true
  }

  export type NoticeSumAggregateInputType = {
    id?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    mediaType?: true
    mediaUrl?: true
    accent?: true
    createdAt?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    mediaType?: true
    mediaUrl?: true
    accent?: true
    createdAt?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    mediaType?: true
    mediaUrl?: true
    accent?: true
    createdAt?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: number
    title: string
    date: Date
    category: string
    description: string
    mediaType: string
    mediaUrl: string | null
    accent: string
    createdAt: Date
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    accent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    accent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    accent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notice"]>

  export type NoticeSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    mediaType?: boolean
    mediaUrl?: boolean
    accent?: boolean
    createdAt?: boolean
  }

  export type NoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "category" | "description" | "mediaType" | "mediaUrl" | "accent" | "createdAt", ExtArgs["result"]["notice"]>

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      date: Date
      category: string
      description: string
      mediaType: string
      mediaUrl: string | null
      accent: string
      createdAt: Date
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notices and returns the data saved in the database.
     * @param {NoticeCreateManyAndReturnArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoticeCreateManyAndReturnArgs>(args?: SelectSubset<T, NoticeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices and returns the data updated in the database.
     * @param {NoticeUpdateManyAndReturnArgs} args - Arguments to update many Notices.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notices and only return the `id`
     * const noticeWithIdOnly = await prisma.notice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoticeUpdateManyAndReturnArgs>(args: SelectSubset<T, NoticeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'Int'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly date: FieldRef<"Notice", 'DateTime'>
    readonly category: FieldRef<"Notice", 'String'>
    readonly description: FieldRef<"Notice", 'String'>
    readonly mediaType: FieldRef<"Notice", 'String'>
    readonly mediaUrl: FieldRef<"Notice", 'String'>
    readonly accent: FieldRef<"Notice", 'String'>
    readonly createdAt: FieldRef<"Notice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice createManyAndReturn
   */
  export type NoticeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice updateManyAndReturn
   */
  export type NoticeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    excerpt: string | null
    author: string | null
    date: Date | null
    readTime: string | null
    category: string | null
    image: string | null
    createdAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    excerpt: string | null
    author: string | null
    date: Date | null
    readTime: string | null
    category: string | null
    image: string | null
    createdAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    excerpt: number
    author: number
    date: number
    readTime: number
    category: number
    image: number
    createdAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    author?: true
    date?: true
    readTime?: true
    category?: true
    image?: true
    createdAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    author?: true
    date?: true
    readTime?: true
    category?: true
    image?: true
    createdAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    excerpt?: true
    author?: true
    date?: true
    readTime?: true
    category?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    excerpt: string
    author: string
    date: Date
    readTime: string
    category: string
    image: string
    createdAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    date?: boolean
    readTime?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    date?: boolean
    readTime?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    date?: boolean
    readTime?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    excerpt?: boolean
    author?: boolean
    date?: boolean
    readTime?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "excerpt" | "author" | "date" | "readTime" | "category" | "image" | "createdAt", ExtArgs["result"]["post"]>

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      excerpt: string
      author: string
      date: Date
      readTime: string
      category: string
      image: string
      createdAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly excerpt: FieldRef<"Post", 'String'>
    readonly author: FieldRef<"Post", 'String'>
    readonly date: FieldRef<"Post", 'DateTime'>
    readonly readTime: FieldRef<"Post", 'String'>
    readonly category: FieldRef<"Post", 'String'>
    readonly image: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    category: string | null
    description: string | null
    location: string | null
    time: string | null
    accent: string | null
    textAccent: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    category: string | null
    description: string | null
    location: string | null
    time: string | null
    accent: string | null
    textAccent: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    date: number
    category: number
    description: number
    location: number
    time: number
    accent: number
    textAccent: number
    createdAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    location?: true
    time?: true
    accent?: true
    textAccent?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    location?: true
    time?: true
    accent?: true
    textAccent?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    category?: true
    description?: true
    location?: true
    time?: true
    accent?: true
    textAccent?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    date: Date
    category: string
    description: string
    location: string
    time: string
    accent: string
    textAccent: string
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    location?: boolean
    time?: boolean
    accent?: boolean
    textAccent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    location?: boolean
    time?: boolean
    accent?: boolean
    textAccent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    location?: boolean
    time?: boolean
    accent?: boolean
    textAccent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    category?: boolean
    description?: boolean
    location?: boolean
    time?: boolean
    accent?: boolean
    textAccent?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "category" | "description" | "location" | "time" | "accent" | "textAccent" | "createdAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      date: Date
      category: string
      description: string
      location: string
      time: string
      accent: string
      textAccent: string
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly category: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly time: FieldRef<"Event", 'String'>
    readonly accent: FieldRef<"Event", 'String'>
    readonly textAccent: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
  }


  /**
   * Model GalleryItem
   */

  export type AggregateGalleryItem = {
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  export type GalleryItemAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
  }

  export type GalleryItemSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
  }

  export type GalleryItemMinAggregateOutputType = {
    id: number | null
    type: string | null
    src: string | null
    poster: string | null
    title: string | null
    category: string | null
    year: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type GalleryItemMaxAggregateOutputType = {
    id: number | null
    type: string | null
    src: string | null
    poster: string | null
    title: string | null
    category: string | null
    year: string | null
    width: number | null
    height: number | null
    createdAt: Date | null
  }

  export type GalleryItemCountAggregateOutputType = {
    id: number
    type: number
    src: number
    poster: number
    title: number
    category: number
    year: number
    width: number
    height: number
    createdAt: number
    _all: number
  }


  export type GalleryItemAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
  }

  export type GalleryItemSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
  }

  export type GalleryItemMinAggregateInputType = {
    id?: true
    type?: true
    src?: true
    poster?: true
    title?: true
    category?: true
    year?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type GalleryItemMaxAggregateInputType = {
    id?: true
    type?: true
    src?: true
    poster?: true
    title?: true
    category?: true
    year?: true
    width?: true
    height?: true
    createdAt?: true
  }

  export type GalleryItemCountAggregateInputType = {
    id?: true
    type?: true
    src?: true
    poster?: true
    title?: true
    category?: true
    year?: true
    width?: true
    height?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItem to aggregate.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryItems
    **/
    _count?: true | GalleryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GetGalleryItemAggregateType<T extends GalleryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryItem[P]>
      : GetScalarType<T[P], AggregateGalleryItem[P]>
  }




  export type GalleryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithAggregationInput | GalleryItemOrderByWithAggregationInput[]
    by: GalleryItemScalarFieldEnum[] | GalleryItemScalarFieldEnum
    having?: GalleryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryItemCountAggregateInputType | true
    _avg?: GalleryItemAvgAggregateInputType
    _sum?: GalleryItemSumAggregateInputType
    _min?: GalleryItemMinAggregateInputType
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GalleryItemGroupByOutputType = {
    id: number
    type: string
    src: string
    poster: string | null
    title: string
    category: string
    year: string
    width: number
    height: number
    createdAt: Date
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  type GetGalleryItemGroupByPayload<T extends GalleryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
        }
      >
    >


  export type GalleryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    src?: boolean
    poster?: boolean
    title?: boolean
    category?: boolean
    year?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    src?: boolean
    poster?: boolean
    title?: boolean
    category?: boolean
    year?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    src?: boolean
    poster?: boolean
    title?: boolean
    category?: boolean
    year?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectScalar = {
    id?: boolean
    type?: boolean
    src?: boolean
    poster?: boolean
    title?: boolean
    category?: boolean
    year?: boolean
    width?: boolean
    height?: boolean
    createdAt?: boolean
  }

  export type GalleryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "src" | "poster" | "title" | "category" | "year" | "width" | "height" | "createdAt", ExtArgs["result"]["galleryItem"]>

  export type $GalleryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      src: string
      poster: string | null
      title: string
      category: string
      year: string
      width: number
      height: number
      createdAt: Date
    }, ExtArgs["result"]["galleryItem"]>
    composites: {}
  }

  type GalleryItemGetPayload<S extends boolean | null | undefined | GalleryItemDefaultArgs> = $Result.GetResult<Prisma.$GalleryItemPayload, S>

  type GalleryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryItemCountAggregateInputType | true
    }

  export interface GalleryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryItem'], meta: { name: 'GalleryItem' } }
    /**
     * Find zero or one GalleryItem that matches the filter.
     * @param {GalleryItemFindUniqueArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryItemFindUniqueArgs>(args: SelectSubset<T, GalleryItemFindUniqueArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryItemFindUniqueOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryItemFindFirstArgs>(args?: SelectSubset<T, GalleryItemFindFirstArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany()
     * 
     * // Get first 10 GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryItemFindManyArgs>(args?: SelectSubset<T, GalleryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryItem.
     * @param {GalleryItemCreateArgs} args - Arguments to create a GalleryItem.
     * @example
     * // Create one GalleryItem
     * const GalleryItem = await prisma.galleryItem.create({
     *   data: {
     *     // ... data to create a GalleryItem
     *   }
     * })
     * 
     */
    create<T extends GalleryItemCreateArgs>(args: SelectSubset<T, GalleryItemCreateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryItems.
     * @param {GalleryItemCreateManyArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryItemCreateManyArgs>(args?: SelectSubset<T, GalleryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryItems and returns the data saved in the database.
     * @param {GalleryItemCreateManyAndReturnArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryItem.
     * @param {GalleryItemDeleteArgs} args - Arguments to delete one GalleryItem.
     * @example
     * // Delete one GalleryItem
     * const GalleryItem = await prisma.galleryItem.delete({
     *   where: {
     *     // ... filter to delete one GalleryItem
     *   }
     * })
     * 
     */
    delete<T extends GalleryItemDeleteArgs>(args: SelectSubset<T, GalleryItemDeleteArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryItem.
     * @param {GalleryItemUpdateArgs} args - Arguments to update one GalleryItem.
     * @example
     * // Update one GalleryItem
     * const galleryItem = await prisma.galleryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryItemUpdateArgs>(args: SelectSubset<T, GalleryItemUpdateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryItems.
     * @param {GalleryItemDeleteManyArgs} args - Arguments to filter GalleryItems to delete.
     * @example
     * // Delete a few GalleryItems
     * const { count } = await prisma.galleryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryItemDeleteManyArgs>(args?: SelectSubset<T, GalleryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryItemUpdateManyArgs>(args: SelectSubset<T, GalleryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems and returns the data updated in the database.
     * @param {GalleryItemUpdateManyAndReturnArgs} args - Arguments to update many GalleryItems.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryItem.
     * @param {GalleryItemUpsertArgs} args - Arguments to update or create a GalleryItem.
     * @example
     * // Update or create a GalleryItem
     * const galleryItem = await prisma.galleryItem.upsert({
     *   create: {
     *     // ... data to create a GalleryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryItem we want to update
     *   }
     * })
     */
    upsert<T extends GalleryItemUpsertArgs>(args: SelectSubset<T, GalleryItemUpsertArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemCountArgs} args - Arguments to filter GalleryItems to count.
     * @example
     * // Count the number of GalleryItems
     * const count = await prisma.galleryItem.count({
     *   where: {
     *     // ... the filter for the GalleryItems we want to count
     *   }
     * })
    **/
    count<T extends GalleryItemCountArgs>(
      args?: Subset<T, GalleryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryItemAggregateArgs>(args: Subset<T, GalleryItemAggregateArgs>): Prisma.PrismaPromise<GetGalleryItemAggregateType<T>>

    /**
     * Group by GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryItemGroupByArgs['orderBy'] }
        : { orderBy?: GalleryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryItem model
   */
  readonly fields: GalleryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryItem model
   */
  interface GalleryItemFieldRefs {
    readonly id: FieldRef<"GalleryItem", 'Int'>
    readonly type: FieldRef<"GalleryItem", 'String'>
    readonly src: FieldRef<"GalleryItem", 'String'>
    readonly poster: FieldRef<"GalleryItem", 'String'>
    readonly title: FieldRef<"GalleryItem", 'String'>
    readonly category: FieldRef<"GalleryItem", 'String'>
    readonly year: FieldRef<"GalleryItem", 'String'>
    readonly width: FieldRef<"GalleryItem", 'Int'>
    readonly height: FieldRef<"GalleryItem", 'Int'>
    readonly createdAt: FieldRef<"GalleryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryItem findUnique
   */
  export type GalleryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findUniqueOrThrow
   */
  export type GalleryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findFirst
   */
  export type GalleryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findFirstOrThrow
   */
  export type GalleryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findMany
   */
  export type GalleryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItems to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem create
   */
  export type GalleryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryItem.
     */
    data: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
  }

  /**
   * GalleryItem createMany
   */
  export type GalleryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem createManyAndReturn
   */
  export type GalleryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem update
   */
  export type GalleryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryItem.
     */
    data: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
    /**
     * Choose, which GalleryItem to update.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem updateMany
   */
  export type GalleryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem updateManyAndReturn
   */
  export type GalleryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem upsert
   */
  export type GalleryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryItem to update in case it exists.
     */
    where: GalleryItemWhereUniqueInput
    /**
     * In case the GalleryItem found by the `where` argument doesn't exist, create a new GalleryItem with this data.
     */
    create: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
    /**
     * In case the GalleryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
  }

  /**
   * GalleryItem delete
   */
  export type GalleryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter which GalleryItem to delete.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem deleteMany
   */
  export type GalleryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItems to delete
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to delete.
     */
    limit?: number
  }

  /**
   * GalleryItem without action
   */
  export type GalleryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    category: 'category',
    description: 'description',
    mediaType: 'mediaType',
    mediaUrl: 'mediaUrl',
    accent: 'accent',
    createdAt: 'createdAt'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    excerpt: 'excerpt',
    author: 'author',
    date: 'date',
    readTime: 'readTime',
    category: 'category',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    category: 'category',
    description: 'description',
    location: 'location',
    time: 'time',
    accent: 'accent',
    textAccent: 'textAccent',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const GalleryItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    src: 'src',
    poster: 'poster',
    title: 'title',
    category: 'category',
    year: 'year',
    width: 'width',
    height: 'height',
    createdAt: 'createdAt'
  };

  export type GalleryItemScalarFieldEnum = (typeof GalleryItemScalarFieldEnum)[keyof typeof GalleryItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: IntFilter<"Notice"> | number
    title?: StringFilter<"Notice"> | string
    date?: DateTimeFilter<"Notice"> | Date | string
    category?: StringFilter<"Notice"> | string
    description?: StringFilter<"Notice"> | string
    mediaType?: StringFilter<"Notice"> | string
    mediaUrl?: StringNullableFilter<"Notice"> | string | null
    accent?: StringFilter<"Notice"> | string
    createdAt?: DateTimeFilter<"Notice"> | Date | string
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    accent?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    title?: StringFilter<"Notice"> | string
    date?: DateTimeFilter<"Notice"> | Date | string
    category?: StringFilter<"Notice"> | string
    description?: StringFilter<"Notice"> | string
    mediaType?: StringFilter<"Notice"> | string
    mediaUrl?: StringNullableFilter<"Notice"> | string | null
    accent?: StringFilter<"Notice"> | string
    createdAt?: DateTimeFilter<"Notice"> | Date | string
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    accent?: SortOrder
    createdAt?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notice"> | number
    title?: StringWithAggregatesFilter<"Notice"> | string
    date?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    category?: StringWithAggregatesFilter<"Notice"> | string
    description?: StringWithAggregatesFilter<"Notice"> | string
    mediaType?: StringWithAggregatesFilter<"Notice"> | string
    mediaUrl?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    accent?: StringWithAggregatesFilter<"Notice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    excerpt?: StringFilter<"Post"> | string
    author?: StringFilter<"Post"> | string
    date?: DateTimeFilter<"Post"> | Date | string
    readTime?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    date?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    excerpt?: StringFilter<"Post"> | string
    author?: StringFilter<"Post"> | string
    date?: DateTimeFilter<"Post"> | Date | string
    readTime?: StringFilter<"Post"> | string
    category?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    date?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    excerpt?: StringWithAggregatesFilter<"Post"> | string
    author?: StringWithAggregatesFilter<"Post"> | string
    date?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    readTime?: StringWithAggregatesFilter<"Post"> | string
    category?: StringWithAggregatesFilter<"Post"> | string
    image?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    category?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    time?: StringFilter<"Event"> | string
    accent?: StringFilter<"Event"> | string
    textAccent?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    location?: SortOrder
    time?: SortOrder
    accent?: SortOrder
    textAccent?: SortOrder
    createdAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    category?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    time?: StringFilter<"Event"> | string
    accent?: StringFilter<"Event"> | string
    textAccent?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    location?: SortOrder
    time?: SortOrder
    accent?: SortOrder
    textAccent?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    category?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    time?: StringWithAggregatesFilter<"Event"> | string
    accent?: StringWithAggregatesFilter<"Event"> | string
    textAccent?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type GalleryItemWhereInput = {
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    id?: IntFilter<"GalleryItem"> | number
    type?: StringFilter<"GalleryItem"> | string
    src?: StringFilter<"GalleryItem"> | string
    poster?: StringNullableFilter<"GalleryItem"> | string | null
    title?: StringFilter<"GalleryItem"> | string
    category?: StringFilter<"GalleryItem"> | string
    year?: StringFilter<"GalleryItem"> | string
    width?: IntFilter<"GalleryItem"> | number
    height?: IntFilter<"GalleryItem"> | number
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }

  export type GalleryItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    poster?: SortOrderInput | SortOrder
    title?: SortOrder
    category?: SortOrder
    year?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    type?: StringFilter<"GalleryItem"> | string
    src?: StringFilter<"GalleryItem"> | string
    poster?: StringNullableFilter<"GalleryItem"> | string | null
    title?: StringFilter<"GalleryItem"> | string
    category?: StringFilter<"GalleryItem"> | string
    year?: StringFilter<"GalleryItem"> | string
    width?: IntFilter<"GalleryItem"> | number
    height?: IntFilter<"GalleryItem"> | number
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }, "id">

  export type GalleryItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    poster?: SortOrderInput | SortOrder
    title?: SortOrder
    category?: SortOrder
    year?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryItemCountOrderByAggregateInput
    _avg?: GalleryItemAvgOrderByAggregateInput
    _max?: GalleryItemMaxOrderByAggregateInput
    _min?: GalleryItemMinOrderByAggregateInput
    _sum?: GalleryItemSumOrderByAggregateInput
  }

  export type GalleryItemScalarWhereWithAggregatesInput = {
    AND?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    OR?: GalleryItemScalarWhereWithAggregatesInput[]
    NOT?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GalleryItem"> | number
    type?: StringWithAggregatesFilter<"GalleryItem"> | string
    src?: StringWithAggregatesFilter<"GalleryItem"> | string
    poster?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    title?: StringWithAggregatesFilter<"GalleryItem"> | string
    category?: StringWithAggregatesFilter<"GalleryItem"> | string
    year?: StringWithAggregatesFilter<"GalleryItem"> | string
    width?: IntWithAggregatesFilter<"GalleryItem"> | number
    height?: IntWithAggregatesFilter<"GalleryItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
  }

  export type NoticeCreateInput = {
    title: string
    date: Date | string
    category: string
    description: string
    mediaType: string
    mediaUrl?: string | null
    accent: string
    createdAt?: Date | string
  }

  export type NoticeUncheckedCreateInput = {
    id?: number
    title: string
    date: Date | string
    category: string
    description: string
    mediaType: string
    mediaUrl?: string | null
    accent: string
    createdAt?: Date | string
  }

  export type NoticeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeCreateManyInput = {
    id?: number
    title: string
    date: Date | string
    category: string
    description: string
    mediaType: string
    mediaUrl?: string | null
    accent: string
    createdAt?: Date | string
  }

  export type NoticeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaType?: StringFieldUpdateOperationsInput | string
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    excerpt: string
    author: string
    date: Date | string
    readTime: string
    category: string
    image: string
    createdAt?: Date | string
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    excerpt: string
    author: string
    date: Date | string
    readTime: string
    category: string
    image: string
    createdAt?: Date | string
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readTime?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readTime?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    excerpt: string
    author: string
    date: Date | string
    readTime: string
    category: string
    image: string
    createdAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readTime?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    readTime?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    date: Date | string
    category: string
    description: string
    location: string
    time: string
    accent: string
    textAccent: string
    createdAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    date: Date | string
    category: string
    description: string
    location: string
    time: string
    accent: string
    textAccent: string
    createdAt?: Date | string
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    textAccent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    textAccent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    date: Date | string
    category: string
    description: string
    location: string
    time: string
    accent: string
    textAccent: string
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    textAccent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    accent?: StringFieldUpdateOperationsInput | string
    textAccent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateInput = {
    type: string
    src: string
    poster?: string | null
    title: string
    category: string
    year: string
    width: number
    height: number
    createdAt?: Date | string
  }

  export type GalleryItemUncheckedCreateInput = {
    id?: number
    type: string
    src: string
    poster?: string | null
    title: string
    category: string
    year: string
    width: number
    height: number
    createdAt?: Date | string
  }

  export type GalleryItemUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateManyInput = {
    id?: number
    type: string
    src: string
    poster?: string | null
    title: string
    category: string
    year: string
    width: number
    height: number
    createdAt?: Date | string
  }

  export type GalleryItemUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    src?: StringFieldUpdateOperationsInput | string
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    accent?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    accent?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    mediaType?: SortOrder
    mediaUrl?: SortOrder
    accent?: SortOrder
    createdAt?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    date?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    date?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    author?: SortOrder
    date?: SortOrder
    readTime?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    location?: SortOrder
    time?: SortOrder
    accent?: SortOrder
    textAccent?: SortOrder
    createdAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    location?: SortOrder
    time?: SortOrder
    accent?: SortOrder
    textAccent?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    category?: SortOrder
    description?: SortOrder
    location?: SortOrder
    time?: SortOrder
    accent?: SortOrder
    textAccent?: SortOrder
    createdAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GalleryItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    category?: SortOrder
    year?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type GalleryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    category?: SortOrder
    year?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    src?: SortOrder
    poster?: SortOrder
    title?: SortOrder
    category?: SortOrder
    year?: SortOrder
    width?: SortOrder
    height?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryItemSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}