
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model InstagramProfile
 * 
 */
export type InstagramProfile = $Result.DefaultSelection<Prisma.$InstagramProfilePayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  raw: 'raw',
  processed: 'processed',
  failed: 'failed'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Locations
 * const locations = await prisma.location.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.instagramProfile`: Exposes CRUD operations for the **InstagramProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstagramProfiles
    * const instagramProfiles = await prisma.instagramProfile.findMany()
    * ```
    */
  get instagramProfile(): Prisma.InstagramProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Location: 'Location',
    Group: 'Group',
    Event: 'Event',
    InstagramProfile: 'InstagramProfile',
    Destination: 'Destination',
    Category: 'Category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "location" | "group" | "event" | "instagramProfile" | "destination" | "category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
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
      InstagramProfile: {
        payload: Prisma.$InstagramProfilePayload<ExtArgs>
        fields: Prisma.InstagramProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstagramProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstagramProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>
          }
          findFirst: {
            args: Prisma.InstagramProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstagramProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>
          }
          findMany: {
            args: Prisma.InstagramProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>[]
          }
          create: {
            args: Prisma.InstagramProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>
          }
          createMany: {
            args: Prisma.InstagramProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstagramProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>[]
          }
          delete: {
            args: Prisma.InstagramProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>
          }
          update: {
            args: Prisma.InstagramProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>
          }
          deleteMany: {
            args: Prisma.InstagramProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstagramProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstagramProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>[]
          }
          upsert: {
            args: Prisma.InstagramProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstagramProfilePayload>
          }
          aggregate: {
            args: Prisma.InstagramProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstagramProfile>
          }
          groupBy: {
            args: Prisma.InstagramProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstagramProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstagramProfileCountArgs<ExtArgs>
            result: $Utils.Optional<InstagramProfileCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    location?: LocationOmit
    group?: GroupOmit
    event?: EventOmit
    instagramProfile?: InstagramProfileOmit
    destination?: DestinationOmit
    category?: CategoryOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    events: number
    groups: number
    instagramProfiles: number
    destinations: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | LocationCountOutputTypeCountEventsArgs
    groups?: boolean | LocationCountOutputTypeCountGroupsArgs
    instagramProfiles?: boolean | LocationCountOutputTypeCountInstagramProfilesArgs
    destinations?: boolean | LocationCountOutputTypeCountDestinationsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountInstagramProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstagramProfileWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    events: number
    locations: number
    destinations: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | GroupCountOutputTypeCountEventsArgs
    locations?: boolean | GroupCountOutputTypeCountLocationsArgs
    destinations?: boolean | GroupCountOutputTypeCountDestinationsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    destinations: number
    categories: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | EventCountOutputTypeCountDestinationsArgs
    categories?: boolean | EventCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type InstagramProfileCountOutputType
   */

  export type InstagramProfileCountOutputType = {
    locations: number
  }

  export type InstagramProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | InstagramProfileCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * InstagramProfileCountOutputType without action
   */
  export type InstagramProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfileCountOutputType
     */
    select?: InstagramProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstagramProfileCountOutputType without action
   */
  export type InstagramProfileCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    events: number
    groups: number
    locations: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | DestinationCountOutputTypeCountEventsArgs
    groups?: boolean | DestinationCountOutputTypeCountGroupsArgs
    locations?: boolean | DestinationCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    events: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CategoryCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    city: string | null
    slug: string | null
    country: string | null
    posterUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    city: string | null
    slug: string | null
    country: string | null
    posterUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    city: number
    slug: number
    country: number
    posterUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    city?: true
    slug?: true
    country?: true
    posterUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    city?: true
    slug?: true
    country?: true
    posterUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    city?: true
    slug?: true
    country?: true
    posterUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    city: string
    slug: string
    country: string
    posterUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    slug?: boolean
    country?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Location$eventsArgs<ExtArgs>
    groups?: boolean | Location$groupsArgs<ExtArgs>
    instagramProfiles?: boolean | Location$instagramProfilesArgs<ExtArgs>
    destinations?: boolean | Location$destinationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    slug?: boolean
    country?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    slug?: boolean
    country?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    city?: boolean
    slug?: boolean
    country?: boolean
    posterUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "slug" | "country" | "posterUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Location$eventsArgs<ExtArgs>
    groups?: boolean | Location$groupsArgs<ExtArgs>
    instagramProfiles?: boolean | Location$instagramProfilesArgs<ExtArgs>
    destinations?: boolean | Location$destinationsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      instagramProfiles: Prisma.$InstagramProfilePayload<ExtArgs>[]
      destinations: Prisma.$DestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city: string
      slug: string
      country: string
      posterUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Location$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Location$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Location$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Location$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instagramProfiles<T extends Location$instagramProfilesArgs<ExtArgs> = {}>(args?: Subset<T, Location$instagramProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinations<T extends Location$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Location$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly slug: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly posterUrl: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.events
   */
  export type Location$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Location.groups
   */
  export type Location$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Location.instagramProfiles
   */
  export type Location$instagramProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    where?: InstagramProfileWhereInput
    orderBy?: InstagramProfileOrderByWithRelationInput | InstagramProfileOrderByWithRelationInput[]
    cursor?: InstagramProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstagramProfileScalarFieldEnum | InstagramProfileScalarFieldEnum[]
  }

  /**
   * Location.destinations
   */
  export type Location$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    details: string | null
    processedShortBio: string | null
    processedDescription: string | null
    instagram: string | null
    phone: string | null
    email: string | null
    source: string | null
    logo: string | null
    tagLine: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    details: string | null
    processedShortBio: string | null
    processedDescription: string | null
    instagram: string | null
    phone: string | null
    email: string | null
    source: string | null
    logo: string | null
    tagLine: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    details: number
    processedShortBio: number
    processedDescription: number
    instagram: number
    phone: number
    email: number
    meta: number
    source: number
    logo: number
    posterUrls: number
    tagLine: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    details?: true
    processedShortBio?: true
    processedDescription?: true
    instagram?: true
    phone?: true
    email?: true
    source?: true
    logo?: true
    tagLine?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    details?: true
    processedShortBio?: true
    processedDescription?: true
    instagram?: true
    phone?: true
    email?: true
    source?: true
    logo?: true
    tagLine?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    details?: true
    processedShortBio?: true
    processedDescription?: true
    instagram?: true
    phone?: true
    email?: true
    meta?: true
    source?: true
    logo?: true
    posterUrls?: true
    tagLine?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    slug: string
    details: string
    processedShortBio: string | null
    processedDescription: string | null
    instagram: string | null
    phone: string | null
    email: string | null
    meta: JsonValue | null
    source: string
    logo: string | null
    posterUrls: string[]
    tagLine: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    details?: boolean
    processedShortBio?: boolean
    processedDescription?: boolean
    instagram?: boolean
    phone?: boolean
    email?: boolean
    meta?: boolean
    source?: boolean
    logo?: boolean
    posterUrls?: boolean
    tagLine?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Group$eventsArgs<ExtArgs>
    locations?: boolean | Group$locationsArgs<ExtArgs>
    destinations?: boolean | Group$destinationsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    details?: boolean
    processedShortBio?: boolean
    processedDescription?: boolean
    instagram?: boolean
    phone?: boolean
    email?: boolean
    meta?: boolean
    source?: boolean
    logo?: boolean
    posterUrls?: boolean
    tagLine?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    details?: boolean
    processedShortBio?: boolean
    processedDescription?: boolean
    instagram?: boolean
    phone?: boolean
    email?: boolean
    meta?: boolean
    source?: boolean
    logo?: boolean
    posterUrls?: boolean
    tagLine?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    details?: boolean
    processedShortBio?: boolean
    processedDescription?: boolean
    instagram?: boolean
    phone?: boolean
    email?: boolean
    meta?: boolean
    source?: boolean
    logo?: boolean
    posterUrls?: boolean
    tagLine?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "details" | "processedShortBio" | "processedDescription" | "instagram" | "phone" | "email" | "meta" | "source" | "logo" | "posterUrls" | "tagLine" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Group$eventsArgs<ExtArgs>
    locations?: boolean | Group$locationsArgs<ExtArgs>
    destinations?: boolean | Group$destinationsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
      destinations: Prisma.$DestinationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      details: string
      processedShortBio: string | null
      processedDescription: string | null
      instagram: string | null
      phone: string | null
      email: string | null
      meta: Prisma.JsonValue | null
      source: string
      logo: string | null
      posterUrls: string[]
      tagLine: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Group$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Group$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends Group$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Group$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinations<T extends Group$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Group$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly slug: FieldRef<"Group", 'String'>
    readonly details: FieldRef<"Group", 'String'>
    readonly processedShortBio: FieldRef<"Group", 'String'>
    readonly processedDescription: FieldRef<"Group", 'String'>
    readonly instagram: FieldRef<"Group", 'String'>
    readonly phone: FieldRef<"Group", 'String'>
    readonly email: FieldRef<"Group", 'String'>
    readonly meta: FieldRef<"Group", 'Json'>
    readonly source: FieldRef<"Group", 'String'>
    readonly logo: FieldRef<"Group", 'String'>
    readonly posterUrls: FieldRef<"Group", 'String[]'>
    readonly tagLine: FieldRef<"Group", 'String'>
    readonly status: FieldRef<"Group", 'Status'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.events
   */
  export type Group$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Group.locations
   */
  export type Group$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Group.destinations
   */
  export type Group$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
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
    price: number | null
  }

  export type EventSumAggregateOutputType = {
    price: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    durations: string | null
    details: string | null
    price: number | null
    locationId: string | null
    groupId: string | null
    source: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    durations: string | null
    details: string | null
    price: number | null
    locationId: string | null
    groupId: string | null
    source: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    durations: number
    details: number
    price: number
    locationId: number
    groupId: number
    posterUrls: number
    meta: number
    includes: number
    excludes: number
    source: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    price?: true
  }

  export type EventSumAggregateInputType = {
    price?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    durations?: true
    details?: true
    price?: true
    locationId?: true
    groupId?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    durations?: true
    details?: true
    price?: true
    locationId?: true
    groupId?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    durations?: true
    details?: true
    price?: true
    locationId?: true
    groupId?: true
    posterUrls?: true
    meta?: true
    includes?: true
    excludes?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    title: string
    slug: string
    durations: string | null
    details: string | null
    price: number | null
    locationId: string
    groupId: string
    posterUrls: string[]
    meta: JsonValue | null
    includes: string[]
    excludes: string[]
    source: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
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
    slug?: boolean
    durations?: boolean
    details?: boolean
    price?: boolean
    locationId?: boolean
    groupId?: boolean
    posterUrls?: boolean
    meta?: boolean
    includes?: boolean
    excludes?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    destinations?: boolean | Event$destinationsArgs<ExtArgs>
    categories?: boolean | Event$categoriesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    durations?: boolean
    details?: boolean
    price?: boolean
    locationId?: boolean
    groupId?: boolean
    posterUrls?: boolean
    meta?: boolean
    includes?: boolean
    excludes?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    durations?: boolean
    details?: boolean
    price?: boolean
    locationId?: boolean
    groupId?: boolean
    posterUrls?: boolean
    meta?: boolean
    includes?: boolean
    excludes?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    durations?: boolean
    details?: boolean
    price?: boolean
    locationId?: boolean
    groupId?: boolean
    posterUrls?: boolean
    meta?: boolean
    includes?: boolean
    excludes?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "durations" | "details" | "price" | "locationId" | "groupId" | "posterUrls" | "meta" | "includes" | "excludes" | "source" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    destinations?: boolean | Event$destinationsArgs<ExtArgs>
    categories?: boolean | Event$categoriesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      destinations: Prisma.$DestinationPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      durations: string | null
      details: string | null
      price: number | null
      locationId: string
      groupId: string
      posterUrls: string[]
      meta: Prisma.JsonValue | null
      includes: string[]
      excludes: string[]
      source: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
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
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destinations<T extends Event$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Event$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Event$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly slug: FieldRef<"Event", 'String'>
    readonly durations: FieldRef<"Event", 'String'>
    readonly details: FieldRef<"Event", 'String'>
    readonly price: FieldRef<"Event", 'Int'>
    readonly locationId: FieldRef<"Event", 'String'>
    readonly groupId: FieldRef<"Event", 'String'>
    readonly posterUrls: FieldRef<"Event", 'String[]'>
    readonly meta: FieldRef<"Event", 'Json'>
    readonly includes: FieldRef<"Event", 'String[]'>
    readonly excludes: FieldRef<"Event", 'String[]'>
    readonly source: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'Status'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
   * Event.destinations
   */
  export type Event$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Event.categories
   */
  export type Event$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model InstagramProfile
   */

  export type AggregateInstagramProfile = {
    _count: InstagramProfileCountAggregateOutputType | null
    _avg: InstagramProfileAvgAggregateOutputType | null
    _sum: InstagramProfileSumAggregateOutputType | null
    _min: InstagramProfileMinAggregateOutputType | null
    _max: InstagramProfileMaxAggregateOutputType | null
  }

  export type InstagramProfileAvgAggregateOutputType = {
    followersCount: number | null
  }

  export type InstagramProfileSumAggregateOutputType = {
    followersCount: number | null
  }

  export type InstagramProfileMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    followers: string | null
    followersCount: number | null
    following: string | null
    posts: string | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstagramProfileMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    followers: string | null
    followersCount: number | null
    following: string | null
    posts: string | null
    profilePic: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstagramProfileCountAggregateOutputType = {
    id: number
    username: number
    name: number
    followers: number
    followersCount: number
    following: number
    posts: number
    profilePic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstagramProfileAvgAggregateInputType = {
    followersCount?: true
  }

  export type InstagramProfileSumAggregateInputType = {
    followersCount?: true
  }

  export type InstagramProfileMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    followers?: true
    followersCount?: true
    following?: true
    posts?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstagramProfileMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    followers?: true
    followersCount?: true
    following?: true
    posts?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstagramProfileCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    followers?: true
    followersCount?: true
    following?: true
    posts?: true
    profilePic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstagramProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstagramProfile to aggregate.
     */
    where?: InstagramProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramProfiles to fetch.
     */
    orderBy?: InstagramProfileOrderByWithRelationInput | InstagramProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstagramProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstagramProfiles
    **/
    _count?: true | InstagramProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstagramProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstagramProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstagramProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstagramProfileMaxAggregateInputType
  }

  export type GetInstagramProfileAggregateType<T extends InstagramProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateInstagramProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstagramProfile[P]>
      : GetScalarType<T[P], AggregateInstagramProfile[P]>
  }




  export type InstagramProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstagramProfileWhereInput
    orderBy?: InstagramProfileOrderByWithAggregationInput | InstagramProfileOrderByWithAggregationInput[]
    by: InstagramProfileScalarFieldEnum[] | InstagramProfileScalarFieldEnum
    having?: InstagramProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstagramProfileCountAggregateInputType | true
    _avg?: InstagramProfileAvgAggregateInputType
    _sum?: InstagramProfileSumAggregateInputType
    _min?: InstagramProfileMinAggregateInputType
    _max?: InstagramProfileMaxAggregateInputType
  }

  export type InstagramProfileGroupByOutputType = {
    id: string
    username: string
    name: string | null
    followers: string | null
    followersCount: number | null
    following: string | null
    posts: string | null
    profilePic: string | null
    createdAt: Date
    updatedAt: Date
    _count: InstagramProfileCountAggregateOutputType | null
    _avg: InstagramProfileAvgAggregateOutputType | null
    _sum: InstagramProfileSumAggregateOutputType | null
    _min: InstagramProfileMinAggregateOutputType | null
    _max: InstagramProfileMaxAggregateOutputType | null
  }

  type GetInstagramProfileGroupByPayload<T extends InstagramProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstagramProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstagramProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstagramProfileGroupByOutputType[P]>
            : GetScalarType<T[P], InstagramProfileGroupByOutputType[P]>
        }
      >
    >


  export type InstagramProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    followers?: boolean
    followersCount?: boolean
    following?: boolean
    posts?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locations?: boolean | InstagramProfile$locationsArgs<ExtArgs>
    _count?: boolean | InstagramProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instagramProfile"]>

  export type InstagramProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    followers?: boolean
    followersCount?: boolean
    following?: boolean
    posts?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instagramProfile"]>

  export type InstagramProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    followers?: boolean
    followersCount?: boolean
    following?: boolean
    posts?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["instagramProfile"]>

  export type InstagramProfileSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    followers?: boolean
    followersCount?: boolean
    following?: boolean
    posts?: boolean
    profilePic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstagramProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "followers" | "followersCount" | "following" | "posts" | "profilePic" | "createdAt" | "updatedAt", ExtArgs["result"]["instagramProfile"]>
  export type InstagramProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | InstagramProfile$locationsArgs<ExtArgs>
    _count?: boolean | InstagramProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstagramProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstagramProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstagramProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstagramProfile"
    objects: {
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string | null
      followers: string | null
      followersCount: number | null
      following: string | null
      posts: string | null
      profilePic: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instagramProfile"]>
    composites: {}
  }

  type InstagramProfileGetPayload<S extends boolean | null | undefined | InstagramProfileDefaultArgs> = $Result.GetResult<Prisma.$InstagramProfilePayload, S>

  type InstagramProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstagramProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstagramProfileCountAggregateInputType | true
    }

  export interface InstagramProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstagramProfile'], meta: { name: 'InstagramProfile' } }
    /**
     * Find zero or one InstagramProfile that matches the filter.
     * @param {InstagramProfileFindUniqueArgs} args - Arguments to find a InstagramProfile
     * @example
     * // Get one InstagramProfile
     * const instagramProfile = await prisma.instagramProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstagramProfileFindUniqueArgs>(args: SelectSubset<T, InstagramProfileFindUniqueArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstagramProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstagramProfileFindUniqueOrThrowArgs} args - Arguments to find a InstagramProfile
     * @example
     * // Get one InstagramProfile
     * const instagramProfile = await prisma.instagramProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstagramProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, InstagramProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstagramProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileFindFirstArgs} args - Arguments to find a InstagramProfile
     * @example
     * // Get one InstagramProfile
     * const instagramProfile = await prisma.instagramProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstagramProfileFindFirstArgs>(args?: SelectSubset<T, InstagramProfileFindFirstArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstagramProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileFindFirstOrThrowArgs} args - Arguments to find a InstagramProfile
     * @example
     * // Get one InstagramProfile
     * const instagramProfile = await prisma.instagramProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstagramProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, InstagramProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstagramProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstagramProfiles
     * const instagramProfiles = await prisma.instagramProfile.findMany()
     * 
     * // Get first 10 InstagramProfiles
     * const instagramProfiles = await prisma.instagramProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instagramProfileWithIdOnly = await prisma.instagramProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstagramProfileFindManyArgs>(args?: SelectSubset<T, InstagramProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstagramProfile.
     * @param {InstagramProfileCreateArgs} args - Arguments to create a InstagramProfile.
     * @example
     * // Create one InstagramProfile
     * const InstagramProfile = await prisma.instagramProfile.create({
     *   data: {
     *     // ... data to create a InstagramProfile
     *   }
     * })
     * 
     */
    create<T extends InstagramProfileCreateArgs>(args: SelectSubset<T, InstagramProfileCreateArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstagramProfiles.
     * @param {InstagramProfileCreateManyArgs} args - Arguments to create many InstagramProfiles.
     * @example
     * // Create many InstagramProfiles
     * const instagramProfile = await prisma.instagramProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstagramProfileCreateManyArgs>(args?: SelectSubset<T, InstagramProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstagramProfiles and returns the data saved in the database.
     * @param {InstagramProfileCreateManyAndReturnArgs} args - Arguments to create many InstagramProfiles.
     * @example
     * // Create many InstagramProfiles
     * const instagramProfile = await prisma.instagramProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstagramProfiles and only return the `id`
     * const instagramProfileWithIdOnly = await prisma.instagramProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstagramProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, InstagramProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstagramProfile.
     * @param {InstagramProfileDeleteArgs} args - Arguments to delete one InstagramProfile.
     * @example
     * // Delete one InstagramProfile
     * const InstagramProfile = await prisma.instagramProfile.delete({
     *   where: {
     *     // ... filter to delete one InstagramProfile
     *   }
     * })
     * 
     */
    delete<T extends InstagramProfileDeleteArgs>(args: SelectSubset<T, InstagramProfileDeleteArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstagramProfile.
     * @param {InstagramProfileUpdateArgs} args - Arguments to update one InstagramProfile.
     * @example
     * // Update one InstagramProfile
     * const instagramProfile = await prisma.instagramProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstagramProfileUpdateArgs>(args: SelectSubset<T, InstagramProfileUpdateArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstagramProfiles.
     * @param {InstagramProfileDeleteManyArgs} args - Arguments to filter InstagramProfiles to delete.
     * @example
     * // Delete a few InstagramProfiles
     * const { count } = await prisma.instagramProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstagramProfileDeleteManyArgs>(args?: SelectSubset<T, InstagramProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstagramProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstagramProfiles
     * const instagramProfile = await prisma.instagramProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstagramProfileUpdateManyArgs>(args: SelectSubset<T, InstagramProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstagramProfiles and returns the data updated in the database.
     * @param {InstagramProfileUpdateManyAndReturnArgs} args - Arguments to update many InstagramProfiles.
     * @example
     * // Update many InstagramProfiles
     * const instagramProfile = await prisma.instagramProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstagramProfiles and only return the `id`
     * const instagramProfileWithIdOnly = await prisma.instagramProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstagramProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, InstagramProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstagramProfile.
     * @param {InstagramProfileUpsertArgs} args - Arguments to update or create a InstagramProfile.
     * @example
     * // Update or create a InstagramProfile
     * const instagramProfile = await prisma.instagramProfile.upsert({
     *   create: {
     *     // ... data to create a InstagramProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstagramProfile we want to update
     *   }
     * })
     */
    upsert<T extends InstagramProfileUpsertArgs>(args: SelectSubset<T, InstagramProfileUpsertArgs<ExtArgs>>): Prisma__InstagramProfileClient<$Result.GetResult<Prisma.$InstagramProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstagramProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileCountArgs} args - Arguments to filter InstagramProfiles to count.
     * @example
     * // Count the number of InstagramProfiles
     * const count = await prisma.instagramProfile.count({
     *   where: {
     *     // ... the filter for the InstagramProfiles we want to count
     *   }
     * })
    **/
    count<T extends InstagramProfileCountArgs>(
      args?: Subset<T, InstagramProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstagramProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstagramProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstagramProfileAggregateArgs>(args: Subset<T, InstagramProfileAggregateArgs>): Prisma.PrismaPromise<GetInstagramProfileAggregateType<T>>

    /**
     * Group by InstagramProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstagramProfileGroupByArgs} args - Group by arguments.
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
      T extends InstagramProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstagramProfileGroupByArgs['orderBy'] }
        : { orderBy?: InstagramProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstagramProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstagramProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstagramProfile model
   */
  readonly fields: InstagramProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstagramProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstagramProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends InstagramProfile$locationsArgs<ExtArgs> = {}>(args?: Subset<T, InstagramProfile$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstagramProfile model
   */
  interface InstagramProfileFieldRefs {
    readonly id: FieldRef<"InstagramProfile", 'String'>
    readonly username: FieldRef<"InstagramProfile", 'String'>
    readonly name: FieldRef<"InstagramProfile", 'String'>
    readonly followers: FieldRef<"InstagramProfile", 'String'>
    readonly followersCount: FieldRef<"InstagramProfile", 'Int'>
    readonly following: FieldRef<"InstagramProfile", 'String'>
    readonly posts: FieldRef<"InstagramProfile", 'String'>
    readonly profilePic: FieldRef<"InstagramProfile", 'String'>
    readonly createdAt: FieldRef<"InstagramProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"InstagramProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstagramProfile findUnique
   */
  export type InstagramProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstagramProfile to fetch.
     */
    where: InstagramProfileWhereUniqueInput
  }

  /**
   * InstagramProfile findUniqueOrThrow
   */
  export type InstagramProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstagramProfile to fetch.
     */
    where: InstagramProfileWhereUniqueInput
  }

  /**
   * InstagramProfile findFirst
   */
  export type InstagramProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstagramProfile to fetch.
     */
    where?: InstagramProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramProfiles to fetch.
     */
    orderBy?: InstagramProfileOrderByWithRelationInput | InstagramProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstagramProfiles.
     */
    cursor?: InstagramProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstagramProfiles.
     */
    distinct?: InstagramProfileScalarFieldEnum | InstagramProfileScalarFieldEnum[]
  }

  /**
   * InstagramProfile findFirstOrThrow
   */
  export type InstagramProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstagramProfile to fetch.
     */
    where?: InstagramProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramProfiles to fetch.
     */
    orderBy?: InstagramProfileOrderByWithRelationInput | InstagramProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstagramProfiles.
     */
    cursor?: InstagramProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstagramProfiles.
     */
    distinct?: InstagramProfileScalarFieldEnum | InstagramProfileScalarFieldEnum[]
  }

  /**
   * InstagramProfile findMany
   */
  export type InstagramProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstagramProfiles to fetch.
     */
    where?: InstagramProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstagramProfiles to fetch.
     */
    orderBy?: InstagramProfileOrderByWithRelationInput | InstagramProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstagramProfiles.
     */
    cursor?: InstagramProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstagramProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstagramProfiles.
     */
    skip?: number
    distinct?: InstagramProfileScalarFieldEnum | InstagramProfileScalarFieldEnum[]
  }

  /**
   * InstagramProfile create
   */
  export type InstagramProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a InstagramProfile.
     */
    data: XOR<InstagramProfileCreateInput, InstagramProfileUncheckedCreateInput>
  }

  /**
   * InstagramProfile createMany
   */
  export type InstagramProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstagramProfiles.
     */
    data: InstagramProfileCreateManyInput | InstagramProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstagramProfile createManyAndReturn
   */
  export type InstagramProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * The data used to create many InstagramProfiles.
     */
    data: InstagramProfileCreateManyInput | InstagramProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstagramProfile update
   */
  export type InstagramProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a InstagramProfile.
     */
    data: XOR<InstagramProfileUpdateInput, InstagramProfileUncheckedUpdateInput>
    /**
     * Choose, which InstagramProfile to update.
     */
    where: InstagramProfileWhereUniqueInput
  }

  /**
   * InstagramProfile updateMany
   */
  export type InstagramProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstagramProfiles.
     */
    data: XOR<InstagramProfileUpdateManyMutationInput, InstagramProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstagramProfiles to update
     */
    where?: InstagramProfileWhereInput
    /**
     * Limit how many InstagramProfiles to update.
     */
    limit?: number
  }

  /**
   * InstagramProfile updateManyAndReturn
   */
  export type InstagramProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * The data used to update InstagramProfiles.
     */
    data: XOR<InstagramProfileUpdateManyMutationInput, InstagramProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstagramProfiles to update
     */
    where?: InstagramProfileWhereInput
    /**
     * Limit how many InstagramProfiles to update.
     */
    limit?: number
  }

  /**
   * InstagramProfile upsert
   */
  export type InstagramProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the InstagramProfile to update in case it exists.
     */
    where: InstagramProfileWhereUniqueInput
    /**
     * In case the InstagramProfile found by the `where` argument doesn't exist, create a new InstagramProfile with this data.
     */
    create: XOR<InstagramProfileCreateInput, InstagramProfileUncheckedCreateInput>
    /**
     * In case the InstagramProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstagramProfileUpdateInput, InstagramProfileUncheckedUpdateInput>
  }

  /**
   * InstagramProfile delete
   */
  export type InstagramProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
    /**
     * Filter which InstagramProfile to delete.
     */
    where: InstagramProfileWhereUniqueInput
  }

  /**
   * InstagramProfile deleteMany
   */
  export type InstagramProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstagramProfiles to delete
     */
    where?: InstagramProfileWhereInput
    /**
     * Limit how many InstagramProfiles to delete.
     */
    limit?: number
  }

  /**
   * InstagramProfile.locations
   */
  export type InstagramProfile$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * InstagramProfile without action
   */
  export type InstagramProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstagramProfile
     */
    select?: InstagramProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstagramProfile
     */
    omit?: InstagramProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstagramProfileInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Destination$eventsArgs<ExtArgs>
    groups?: boolean | Destination$groupsArgs<ExtArgs>
    locations?: boolean | Destination$locationsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Destination$eventsArgs<ExtArgs>
    groups?: boolean | Destination$groupsArgs<ExtArgs>
    locations?: boolean | Destination$locationsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
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
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
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
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Destination$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends Destination$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends Destination$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly name: FieldRef<"Destination", 'String'>
    readonly slug: FieldRef<"Destination", 'String'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.events
   */
  export type Destination$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Destination.groups
   */
  export type Destination$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Destination.locations
   */
  export type Destination$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Category$eventsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Category$eventsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Category$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Category$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.events
   */
  export type Category$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
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


  export const LocationScalarFieldEnum: {
    id: 'id',
    city: 'city',
    slug: 'slug',
    country: 'country',
    posterUrl: 'posterUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    details: 'details',
    processedShortBio: 'processedShortBio',
    processedDescription: 'processedDescription',
    instagram: 'instagram',
    phone: 'phone',
    email: 'email',
    meta: 'meta',
    source: 'source',
    logo: 'logo',
    posterUrls: 'posterUrls',
    tagLine: 'tagLine',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    durations: 'durations',
    details: 'details',
    price: 'price',
    locationId: 'locationId',
    groupId: 'groupId',
    posterUrls: 'posterUrls',
    meta: 'meta',
    includes: 'includes',
    excludes: 'excludes',
    source: 'source',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const InstagramProfileScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    followers: 'followers',
    followersCount: 'followersCount',
    following: 'following',
    posts: 'posts',
    profilePic: 'profilePic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstagramProfileScalarFieldEnum = (typeof InstagramProfileScalarFieldEnum)[keyof typeof InstagramProfileScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const LocationOrderByRelevanceFieldEnum: {
    id: 'id',
    city: 'city',
    slug: 'slug',
    country: 'country',
    posterUrl: 'posterUrl'
  };

  export type LocationOrderByRelevanceFieldEnum = (typeof LocationOrderByRelevanceFieldEnum)[keyof typeof LocationOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const GroupOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    details: 'details',
    processedShortBio: 'processedShortBio',
    processedDescription: 'processedDescription',
    instagram: 'instagram',
    phone: 'phone',
    email: 'email',
    source: 'source',
    logo: 'logo',
    posterUrls: 'posterUrls',
    tagLine: 'tagLine'
  };

  export type GroupOrderByRelevanceFieldEnum = (typeof GroupOrderByRelevanceFieldEnum)[keyof typeof GroupOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    durations: 'durations',
    details: 'details',
    locationId: 'locationId',
    groupId: 'groupId',
    posterUrls: 'posterUrls',
    includes: 'includes',
    excludes: 'excludes',
    source: 'source'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const InstagramProfileOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    followers: 'followers',
    following: 'following',
    posts: 'posts',
    profilePic: 'profilePic'
  };

  export type InstagramProfileOrderByRelevanceFieldEnum = (typeof InstagramProfileOrderByRelevanceFieldEnum)[keyof typeof InstagramProfileOrderByRelevanceFieldEnum]


  export const DestinationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type DestinationOrderByRelevanceFieldEnum = (typeof DestinationOrderByRelevanceFieldEnum)[keyof typeof DestinationOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    slug?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    posterUrl?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    events?: EventListRelationFilter
    groups?: GroupListRelationFilter
    instagramProfiles?: InstagramProfileListRelationFilter
    destinations?: DestinationListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    slug?: SortOrder
    country?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    instagramProfiles?: InstagramProfileOrderByRelationAggregateInput
    destinations?: DestinationOrderByRelationAggregateInput
    _relevance?: LocationOrderByRelevanceInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    city?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    posterUrl?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    events?: EventListRelationFilter
    groups?: GroupListRelationFilter
    instagramProfiles?: InstagramProfileListRelationFilter
    destinations?: DestinationListRelationFilter
  }, "id" | "slug">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    slug?: SortOrder
    country?: SortOrder
    posterUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    slug?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    posterUrl?: StringNullableWithAggregatesFilter<"Location"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    slug?: StringFilter<"Group"> | string
    details?: StringFilter<"Group"> | string
    processedShortBio?: StringNullableFilter<"Group"> | string | null
    processedDescription?: StringNullableFilter<"Group"> | string | null
    instagram?: StringNullableFilter<"Group"> | string | null
    phone?: StringNullableFilter<"Group"> | string | null
    email?: StringNullableFilter<"Group"> | string | null
    meta?: JsonNullableFilter<"Group">
    source?: StringFilter<"Group"> | string
    logo?: StringNullableFilter<"Group"> | string | null
    posterUrls?: StringNullableListFilter<"Group">
    tagLine?: StringNullableFilter<"Group"> | string | null
    status?: EnumStatusFilter<"Group"> | $Enums.Status
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    events?: EventListRelationFilter
    locations?: LocationListRelationFilter
    destinations?: DestinationListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    details?: SortOrder
    processedShortBio?: SortOrderInput | SortOrder
    processedDescription?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    source?: SortOrder
    logo?: SortOrderInput | SortOrder
    posterUrls?: SortOrder
    tagLine?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    destinations?: DestinationOrderByRelationAggregateInput
    _relevance?: GroupOrderByRelevanceInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    details?: StringFilter<"Group"> | string
    processedShortBio?: StringNullableFilter<"Group"> | string | null
    processedDescription?: StringNullableFilter<"Group"> | string | null
    instagram?: StringNullableFilter<"Group"> | string | null
    phone?: StringNullableFilter<"Group"> | string | null
    email?: StringNullableFilter<"Group"> | string | null
    meta?: JsonNullableFilter<"Group">
    source?: StringFilter<"Group"> | string
    logo?: StringNullableFilter<"Group"> | string | null
    posterUrls?: StringNullableListFilter<"Group">
    tagLine?: StringNullableFilter<"Group"> | string | null
    status?: EnumStatusFilter<"Group"> | $Enums.Status
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    events?: EventListRelationFilter
    locations?: LocationListRelationFilter
    destinations?: DestinationListRelationFilter
  }, "id" | "name" | "slug">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    details?: SortOrder
    processedShortBio?: SortOrderInput | SortOrder
    processedDescription?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    source?: SortOrder
    logo?: SortOrderInput | SortOrder
    posterUrls?: SortOrder
    tagLine?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    slug?: StringWithAggregatesFilter<"Group"> | string
    details?: StringWithAggregatesFilter<"Group"> | string
    processedShortBio?: StringNullableWithAggregatesFilter<"Group"> | string | null
    processedDescription?: StringNullableWithAggregatesFilter<"Group"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Group"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Group"> | string | null
    email?: StringNullableWithAggregatesFilter<"Group"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"Group">
    source?: StringWithAggregatesFilter<"Group"> | string
    logo?: StringNullableWithAggregatesFilter<"Group"> | string | null
    posterUrls?: StringNullableListFilter<"Group">
    tagLine?: StringNullableWithAggregatesFilter<"Group"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Group"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    durations?: StringNullableFilter<"Event"> | string | null
    details?: StringNullableFilter<"Event"> | string | null
    price?: IntNullableFilter<"Event"> | number | null
    locationId?: StringFilter<"Event"> | string
    groupId?: StringFilter<"Event"> | string
    posterUrls?: StringNullableListFilter<"Event">
    meta?: JsonNullableFilter<"Event">
    includes?: StringNullableListFilter<"Event">
    excludes?: StringNullableListFilter<"Event">
    source?: StringFilter<"Event"> | string
    status?: EnumStatusFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    destinations?: DestinationListRelationFilter
    categories?: CategoryListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    durations?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    locationId?: SortOrder
    groupId?: SortOrder
    posterUrls?: SortOrder
    meta?: SortOrderInput | SortOrder
    includes?: SortOrder
    excludes?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    destinations?: DestinationOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    durations?: StringNullableFilter<"Event"> | string | null
    details?: StringNullableFilter<"Event"> | string | null
    price?: IntNullableFilter<"Event"> | number | null
    locationId?: StringFilter<"Event"> | string
    groupId?: StringFilter<"Event"> | string
    posterUrls?: StringNullableListFilter<"Event">
    meta?: JsonNullableFilter<"Event">
    includes?: StringNullableListFilter<"Event">
    excludes?: StringNullableListFilter<"Event">
    source?: StringFilter<"Event"> | string
    status?: EnumStatusFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    destinations?: DestinationListRelationFilter
    categories?: CategoryListRelationFilter
  }, "id" | "slug">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    durations?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    locationId?: SortOrder
    groupId?: SortOrder
    posterUrls?: SortOrder
    meta?: SortOrderInput | SortOrder
    includes?: SortOrder
    excludes?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    slug?: StringWithAggregatesFilter<"Event"> | string
    durations?: StringNullableWithAggregatesFilter<"Event"> | string | null
    details?: StringNullableWithAggregatesFilter<"Event"> | string | null
    price?: IntNullableWithAggregatesFilter<"Event"> | number | null
    locationId?: StringWithAggregatesFilter<"Event"> | string
    groupId?: StringWithAggregatesFilter<"Event"> | string
    posterUrls?: StringNullableListFilter<"Event">
    meta?: JsonNullableWithAggregatesFilter<"Event">
    includes?: StringNullableListFilter<"Event">
    excludes?: StringNullableListFilter<"Event">
    source?: StringWithAggregatesFilter<"Event"> | string
    status?: EnumStatusWithAggregatesFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type InstagramProfileWhereInput = {
    AND?: InstagramProfileWhereInput | InstagramProfileWhereInput[]
    OR?: InstagramProfileWhereInput[]
    NOT?: InstagramProfileWhereInput | InstagramProfileWhereInput[]
    id?: StringFilter<"InstagramProfile"> | string
    username?: StringFilter<"InstagramProfile"> | string
    name?: StringNullableFilter<"InstagramProfile"> | string | null
    followers?: StringNullableFilter<"InstagramProfile"> | string | null
    followersCount?: IntNullableFilter<"InstagramProfile"> | number | null
    following?: StringNullableFilter<"InstagramProfile"> | string | null
    posts?: StringNullableFilter<"InstagramProfile"> | string | null
    profilePic?: StringNullableFilter<"InstagramProfile"> | string | null
    createdAt?: DateTimeFilter<"InstagramProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstagramProfile"> | Date | string
    locations?: LocationListRelationFilter
  }

  export type InstagramProfileOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    followersCount?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    posts?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locations?: LocationOrderByRelationAggregateInput
    _relevance?: InstagramProfileOrderByRelevanceInput
  }

  export type InstagramProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: InstagramProfileWhereInput | InstagramProfileWhereInput[]
    OR?: InstagramProfileWhereInput[]
    NOT?: InstagramProfileWhereInput | InstagramProfileWhereInput[]
    name?: StringNullableFilter<"InstagramProfile"> | string | null
    followers?: StringNullableFilter<"InstagramProfile"> | string | null
    followersCount?: IntNullableFilter<"InstagramProfile"> | number | null
    following?: StringNullableFilter<"InstagramProfile"> | string | null
    posts?: StringNullableFilter<"InstagramProfile"> | string | null
    profilePic?: StringNullableFilter<"InstagramProfile"> | string | null
    createdAt?: DateTimeFilter<"InstagramProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstagramProfile"> | Date | string
    locations?: LocationListRelationFilter
  }, "id" | "username">

  export type InstagramProfileOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    followers?: SortOrderInput | SortOrder
    followersCount?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    posts?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstagramProfileCountOrderByAggregateInput
    _avg?: InstagramProfileAvgOrderByAggregateInput
    _max?: InstagramProfileMaxOrderByAggregateInput
    _min?: InstagramProfileMinOrderByAggregateInput
    _sum?: InstagramProfileSumOrderByAggregateInput
  }

  export type InstagramProfileScalarWhereWithAggregatesInput = {
    AND?: InstagramProfileScalarWhereWithAggregatesInput | InstagramProfileScalarWhereWithAggregatesInput[]
    OR?: InstagramProfileScalarWhereWithAggregatesInput[]
    NOT?: InstagramProfileScalarWhereWithAggregatesInput | InstagramProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstagramProfile"> | string
    username?: StringWithAggregatesFilter<"InstagramProfile"> | string
    name?: StringNullableWithAggregatesFilter<"InstagramProfile"> | string | null
    followers?: StringNullableWithAggregatesFilter<"InstagramProfile"> | string | null
    followersCount?: IntNullableWithAggregatesFilter<"InstagramProfile"> | number | null
    following?: StringNullableWithAggregatesFilter<"InstagramProfile"> | string | null
    posts?: StringNullableWithAggregatesFilter<"InstagramProfile"> | string | null
    profilePic?: StringNullableWithAggregatesFilter<"InstagramProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InstagramProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstagramProfile"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    slug?: StringFilter<"Destination"> | string
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    events?: EventListRelationFilter
    groups?: GroupListRelationFilter
    locations?: LocationListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    _relevance?: DestinationOrderByRelevanceInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    name?: StringFilter<"Destination"> | string
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    events?: EventListRelationFilter
    groups?: GroupListRelationFilter
    locations?: LocationListRelationFilter
  }, "id" | "slug">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    name?: StringWithAggregatesFilter<"Destination"> | string
    slug?: StringWithAggregatesFilter<"Destination"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    events?: EventListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    events?: EventListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutLocationInput
    groups?: GroupCreateNestedManyWithoutLocationsInput
    instagramProfiles?: InstagramProfileCreateNestedManyWithoutLocationsInput
    destinations?: DestinationCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
    groups?: GroupUncheckedCreateNestedManyWithoutLocationsInput
    instagramProfiles?: InstagramProfileUncheckedCreateNestedManyWithoutLocationsInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutLocationNestedInput
    groups?: GroupUpdateManyWithoutLocationsNestedInput
    instagramProfiles?: InstagramProfileUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
    groups?: GroupUncheckedUpdateManyWithoutLocationsNestedInput
    instagramProfiles?: InstagramProfileUncheckedUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutGroupInput
    locations?: LocationCreateNestedManyWithoutGroupsInput
    destinations?: DestinationCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    locations?: LocationUncheckedCreateNestedManyWithoutGroupsInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutGroupNestedInput
    locations?: LocationUpdateManyWithoutGroupsNestedInput
    destinations?: DestinationUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    locations?: LocationUncheckedUpdateManyWithoutGroupsNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutEventsInput
    location: LocationCreateNestedOneWithoutEventsInput
    destinations?: DestinationCreateNestedManyWithoutEventsInput
    categories?: CategoryCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    locationId: string
    groupId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutEventsInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutEventsNestedInput
    location?: LocationUpdateOneRequiredWithoutEventsNestedInput
    destinations?: DestinationUpdateManyWithoutEventsNestedInput
    categories?: CategoryUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutEventsNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    locationId: string
    groupId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramProfileCreateInput = {
    id?: string
    username: string
    name?: string | null
    followers?: string | null
    followersCount?: number | null
    following?: string | null
    posts?: string | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutInstagramProfilesInput
  }

  export type InstagramProfileUncheckedCreateInput = {
    id?: string
    username: string
    name?: string | null
    followers?: string | null
    followersCount?: number | null
    following?: string | null
    posts?: string | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutInstagramProfilesInput
  }

  export type InstagramProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutInstagramProfilesNestedInput
  }

  export type InstagramProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutInstagramProfilesNestedInput
  }

  export type InstagramProfileCreateManyInput = {
    id?: string
    username: string
    name?: string | null
    followers?: string | null
    followersCount?: number | null
    following?: string | null
    posts?: string | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstagramProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutDestinationsInput
    groups?: GroupCreateNestedManyWithoutDestinationsInput
    locations?: LocationCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutDestinationsInput
    groups?: GroupUncheckedCreateNestedManyWithoutDestinationsInput
    locations?: LocationUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutDestinationsNestedInput
    groups?: GroupUpdateManyWithoutDestinationsNestedInput
    locations?: LocationUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutDestinationsNestedInput
    groups?: GroupUncheckedUpdateManyWithoutDestinationsNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type InstagramProfileListRelationFilter = {
    every?: InstagramProfileWhereInput
    some?: InstagramProfileWhereInput
    none?: InstagramProfileWhereInput
  }

  export type DestinationListRelationFilter = {
    every?: DestinationWhereInput
    some?: DestinationWhereInput
    none?: DestinationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstagramProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelevanceInput = {
    fields: LocationOrderByRelevanceFieldEnum | LocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    slug?: SortOrder
    country?: SortOrder
    posterUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    slug?: SortOrder
    country?: SortOrder
    posterUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    slug?: SortOrder
    country?: SortOrder
    posterUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelevanceInput = {
    fields: GroupOrderByRelevanceFieldEnum | GroupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    details?: SortOrder
    processedShortBio?: SortOrder
    processedDescription?: SortOrder
    instagram?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    meta?: SortOrder
    source?: SortOrder
    logo?: SortOrder
    posterUrls?: SortOrder
    tagLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    details?: SortOrder
    processedShortBio?: SortOrder
    processedDescription?: SortOrder
    instagram?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    source?: SortOrder
    logo?: SortOrder
    tagLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    details?: SortOrder
    processedShortBio?: SortOrder
    processedDescription?: SortOrder
    instagram?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    source?: SortOrder
    logo?: SortOrder
    tagLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    durations?: SortOrder
    details?: SortOrder
    price?: SortOrder
    locationId?: SortOrder
    groupId?: SortOrder
    posterUrls?: SortOrder
    meta?: SortOrder
    includes?: SortOrder
    excludes?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    durations?: SortOrder
    details?: SortOrder
    price?: SortOrder
    locationId?: SortOrder
    groupId?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    durations?: SortOrder
    details?: SortOrder
    price?: SortOrder
    locationId?: SortOrder
    groupId?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type InstagramProfileOrderByRelevanceInput = {
    fields: InstagramProfileOrderByRelevanceFieldEnum | InstagramProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InstagramProfileCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    followers?: SortOrder
    followersCount?: SortOrder
    following?: SortOrder
    posts?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstagramProfileAvgOrderByAggregateInput = {
    followersCount?: SortOrder
  }

  export type InstagramProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    followers?: SortOrder
    followersCount?: SortOrder
    following?: SortOrder
    posts?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstagramProfileMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    followers?: SortOrder
    followersCount?: SortOrder
    following?: SortOrder
    posts?: SortOrder
    profilePic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstagramProfileSumOrderByAggregateInput = {
    followersCount?: SortOrder
  }

  export type DestinationOrderByRelevanceInput = {
    fields: DestinationOrderByRelevanceFieldEnum | DestinationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCreateNestedManyWithoutLocationInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutLocationsInput = {
    create?: XOR<GroupCreateWithoutLocationsInput, GroupUncheckedCreateWithoutLocationsInput> | GroupCreateWithoutLocationsInput[] | GroupUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLocationsInput | GroupCreateOrConnectWithoutLocationsInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type InstagramProfileCreateNestedManyWithoutLocationsInput = {
    create?: XOR<InstagramProfileCreateWithoutLocationsInput, InstagramProfileUncheckedCreateWithoutLocationsInput> | InstagramProfileCreateWithoutLocationsInput[] | InstagramProfileUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: InstagramProfileCreateOrConnectWithoutLocationsInput | InstagramProfileCreateOrConnectWithoutLocationsInput[]
    connect?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
  }

  export type DestinationCreateNestedManyWithoutLocationsInput = {
    create?: XOR<DestinationCreateWithoutLocationsInput, DestinationUncheckedCreateWithoutLocationsInput> | DestinationCreateWithoutLocationsInput[] | DestinationUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutLocationsInput | DestinationCreateOrConnectWithoutLocationsInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<GroupCreateWithoutLocationsInput, GroupUncheckedCreateWithoutLocationsInput> | GroupCreateWithoutLocationsInput[] | GroupUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLocationsInput | GroupCreateOrConnectWithoutLocationsInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type InstagramProfileUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<InstagramProfileCreateWithoutLocationsInput, InstagramProfileUncheckedCreateWithoutLocationsInput> | InstagramProfileCreateWithoutLocationsInput[] | InstagramProfileUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: InstagramProfileCreateOrConnectWithoutLocationsInput | InstagramProfileCreateOrConnectWithoutLocationsInput[]
    connect?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<DestinationCreateWithoutLocationsInput, DestinationUncheckedCreateWithoutLocationsInput> | DestinationCreateWithoutLocationsInput[] | DestinationUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutLocationsInput | DestinationCreateOrConnectWithoutLocationsInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutLocationNestedInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLocationInput | EventUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLocationInput | EventUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLocationInput | EventUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<GroupCreateWithoutLocationsInput, GroupUncheckedCreateWithoutLocationsInput> | GroupCreateWithoutLocationsInput[] | GroupUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLocationsInput | GroupCreateOrConnectWithoutLocationsInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutLocationsInput | GroupUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutLocationsInput | GroupUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutLocationsInput | GroupUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type InstagramProfileUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<InstagramProfileCreateWithoutLocationsInput, InstagramProfileUncheckedCreateWithoutLocationsInput> | InstagramProfileCreateWithoutLocationsInput[] | InstagramProfileUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: InstagramProfileCreateOrConnectWithoutLocationsInput | InstagramProfileCreateOrConnectWithoutLocationsInput[]
    upsert?: InstagramProfileUpsertWithWhereUniqueWithoutLocationsInput | InstagramProfileUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    disconnect?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    delete?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    connect?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    update?: InstagramProfileUpdateWithWhereUniqueWithoutLocationsInput | InstagramProfileUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: InstagramProfileUpdateManyWithWhereWithoutLocationsInput | InstagramProfileUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: InstagramProfileScalarWhereInput | InstagramProfileScalarWhereInput[]
  }

  export type DestinationUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<DestinationCreateWithoutLocationsInput, DestinationUncheckedCreateWithoutLocationsInput> | DestinationCreateWithoutLocationsInput[] | DestinationUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutLocationsInput | DestinationCreateOrConnectWithoutLocationsInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutLocationsInput | DestinationUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutLocationsInput | DestinationUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutLocationsInput | DestinationUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLocationInput | EventUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLocationInput | EventUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLocationInput | EventUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<GroupCreateWithoutLocationsInput, GroupUncheckedCreateWithoutLocationsInput> | GroupCreateWithoutLocationsInput[] | GroupUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLocationsInput | GroupCreateOrConnectWithoutLocationsInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutLocationsInput | GroupUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutLocationsInput | GroupUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutLocationsInput | GroupUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type InstagramProfileUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<InstagramProfileCreateWithoutLocationsInput, InstagramProfileUncheckedCreateWithoutLocationsInput> | InstagramProfileCreateWithoutLocationsInput[] | InstagramProfileUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: InstagramProfileCreateOrConnectWithoutLocationsInput | InstagramProfileCreateOrConnectWithoutLocationsInput[]
    upsert?: InstagramProfileUpsertWithWhereUniqueWithoutLocationsInput | InstagramProfileUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    disconnect?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    delete?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    connect?: InstagramProfileWhereUniqueInput | InstagramProfileWhereUniqueInput[]
    update?: InstagramProfileUpdateWithWhereUniqueWithoutLocationsInput | InstagramProfileUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: InstagramProfileUpdateManyWithWhereWithoutLocationsInput | InstagramProfileUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: InstagramProfileScalarWhereInput | InstagramProfileScalarWhereInput[]
  }

  export type DestinationUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<DestinationCreateWithoutLocationsInput, DestinationUncheckedCreateWithoutLocationsInput> | DestinationCreateWithoutLocationsInput[] | DestinationUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutLocationsInput | DestinationCreateOrConnectWithoutLocationsInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutLocationsInput | DestinationUpsertWithWhereUniqueWithoutLocationsInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutLocationsInput | DestinationUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutLocationsInput | DestinationUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type GroupCreateposterUrlsInput = {
    set: string[]
  }

  export type EventCreateNestedManyWithoutGroupInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutGroupsInput = {
    create?: XOR<LocationCreateWithoutGroupsInput, LocationUncheckedCreateWithoutGroupsInput> | LocationCreateWithoutGroupsInput[] | LocationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutGroupsInput | LocationCreateOrConnectWithoutGroupsInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type DestinationCreateNestedManyWithoutGroupsInput = {
    create?: XOR<DestinationCreateWithoutGroupsInput, DestinationUncheckedCreateWithoutGroupsInput> | DestinationCreateWithoutGroupsInput[] | DestinationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutGroupsInput | DestinationCreateOrConnectWithoutGroupsInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<LocationCreateWithoutGroupsInput, LocationUncheckedCreateWithoutGroupsInput> | LocationCreateWithoutGroupsInput[] | LocationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutGroupsInput | LocationCreateOrConnectWithoutGroupsInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<DestinationCreateWithoutGroupsInput, DestinationUncheckedCreateWithoutGroupsInput> | DestinationCreateWithoutGroupsInput[] | DestinationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutGroupsInput | DestinationCreateOrConnectWithoutGroupsInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type GroupUpdateposterUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EventUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutGroupInput | EventUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutGroupInput | EventUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EventUpdateManyWithWhereWithoutGroupInput | EventUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<LocationCreateWithoutGroupsInput, LocationUncheckedCreateWithoutGroupsInput> | LocationCreateWithoutGroupsInput[] | LocationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutGroupsInput | LocationCreateOrConnectWithoutGroupsInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutGroupsInput | LocationUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutGroupsInput | LocationUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutGroupsInput | LocationUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type DestinationUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<DestinationCreateWithoutGroupsInput, DestinationUncheckedCreateWithoutGroupsInput> | DestinationCreateWithoutGroupsInput[] | DestinationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutGroupsInput | DestinationCreateOrConnectWithoutGroupsInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutGroupsInput | DestinationUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutGroupsInput | DestinationUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutGroupsInput | DestinationUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput> | EventCreateWithoutGroupInput[] | EventUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: EventCreateOrConnectWithoutGroupInput | EventCreateOrConnectWithoutGroupInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutGroupInput | EventUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: EventCreateManyGroupInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutGroupInput | EventUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: EventUpdateManyWithWhereWithoutGroupInput | EventUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<LocationCreateWithoutGroupsInput, LocationUncheckedCreateWithoutGroupsInput> | LocationCreateWithoutGroupsInput[] | LocationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutGroupsInput | LocationCreateOrConnectWithoutGroupsInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutGroupsInput | LocationUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutGroupsInput | LocationUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutGroupsInput | LocationUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type DestinationUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<DestinationCreateWithoutGroupsInput, DestinationUncheckedCreateWithoutGroupsInput> | DestinationCreateWithoutGroupsInput[] | DestinationUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutGroupsInput | DestinationCreateOrConnectWithoutGroupsInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutGroupsInput | DestinationUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutGroupsInput | DestinationUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutGroupsInput | DestinationUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type EventCreateposterUrlsInput = {
    set: string[]
  }

  export type EventCreateincludesInput = {
    set: string[]
  }

  export type EventCreateexcludesInput = {
    set: string[]
  }

  export type GroupCreateNestedOneWithoutEventsInput = {
    create?: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput
    connect?: GroupWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutEventsInput = {
    create?: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventsInput
    connect?: LocationWhereUniqueInput
  }

  export type DestinationCreateNestedManyWithoutEventsInput = {
    create?: XOR<DestinationCreateWithoutEventsInput, DestinationUncheckedCreateWithoutEventsInput> | DestinationCreateWithoutEventsInput[] | DestinationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEventsInput | DestinationCreateOrConnectWithoutEventsInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutEventsInput = {
    create?: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput> | CategoryCreateWithoutEventsInput[] | CategoryUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEventsInput | CategoryCreateOrConnectWithoutEventsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<DestinationCreateWithoutEventsInput, DestinationUncheckedCreateWithoutEventsInput> | DestinationCreateWithoutEventsInput[] | DestinationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEventsInput | DestinationCreateOrConnectWithoutEventsInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput> | CategoryCreateWithoutEventsInput[] | CategoryUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEventsInput | CategoryCreateOrConnectWithoutEventsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateposterUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventUpdateincludesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventUpdateexcludesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput
    upsert?: GroupUpsertWithoutEventsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutEventsInput, GroupUpdateWithoutEventsInput>, GroupUncheckedUpdateWithoutEventsInput>
  }

  export type LocationUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventsInput
    upsert?: LocationUpsertWithoutEventsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutEventsInput, LocationUpdateWithoutEventsInput>, LocationUncheckedUpdateWithoutEventsInput>
  }

  export type DestinationUpdateManyWithoutEventsNestedInput = {
    create?: XOR<DestinationCreateWithoutEventsInput, DestinationUncheckedCreateWithoutEventsInput> | DestinationCreateWithoutEventsInput[] | DestinationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEventsInput | DestinationCreateOrConnectWithoutEventsInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutEventsInput | DestinationUpsertWithWhereUniqueWithoutEventsInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutEventsInput | DestinationUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutEventsInput | DestinationUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutEventsNestedInput = {
    create?: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput> | CategoryCreateWithoutEventsInput[] | CategoryUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEventsInput | CategoryCreateOrConnectWithoutEventsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutEventsInput | CategoryUpsertWithWhereUniqueWithoutEventsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutEventsInput | CategoryUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutEventsInput | CategoryUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type DestinationUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<DestinationCreateWithoutEventsInput, DestinationUncheckedCreateWithoutEventsInput> | DestinationCreateWithoutEventsInput[] | DestinationUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutEventsInput | DestinationCreateOrConnectWithoutEventsInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutEventsInput | DestinationUpsertWithWhereUniqueWithoutEventsInput[]
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutEventsInput | DestinationUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutEventsInput | DestinationUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput> | CategoryCreateWithoutEventsInput[] | CategoryUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutEventsInput | CategoryCreateOrConnectWithoutEventsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutEventsInput | CategoryUpsertWithWhereUniqueWithoutEventsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutEventsInput | CategoryUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutEventsInput | CategoryUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type LocationCreateNestedManyWithoutInstagramProfilesInput = {
    create?: XOR<LocationCreateWithoutInstagramProfilesInput, LocationUncheckedCreateWithoutInstagramProfilesInput> | LocationCreateWithoutInstagramProfilesInput[] | LocationUncheckedCreateWithoutInstagramProfilesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutInstagramProfilesInput | LocationCreateOrConnectWithoutInstagramProfilesInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutInstagramProfilesInput = {
    create?: XOR<LocationCreateWithoutInstagramProfilesInput, LocationUncheckedCreateWithoutInstagramProfilesInput> | LocationCreateWithoutInstagramProfilesInput[] | LocationUncheckedCreateWithoutInstagramProfilesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutInstagramProfilesInput | LocationCreateOrConnectWithoutInstagramProfilesInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LocationUpdateManyWithoutInstagramProfilesNestedInput = {
    create?: XOR<LocationCreateWithoutInstagramProfilesInput, LocationUncheckedCreateWithoutInstagramProfilesInput> | LocationCreateWithoutInstagramProfilesInput[] | LocationUncheckedCreateWithoutInstagramProfilesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutInstagramProfilesInput | LocationCreateOrConnectWithoutInstagramProfilesInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutInstagramProfilesInput | LocationUpsertWithWhereUniqueWithoutInstagramProfilesInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutInstagramProfilesInput | LocationUpdateWithWhereUniqueWithoutInstagramProfilesInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutInstagramProfilesInput | LocationUpdateManyWithWhereWithoutInstagramProfilesInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutInstagramProfilesNestedInput = {
    create?: XOR<LocationCreateWithoutInstagramProfilesInput, LocationUncheckedCreateWithoutInstagramProfilesInput> | LocationCreateWithoutInstagramProfilesInput[] | LocationUncheckedCreateWithoutInstagramProfilesInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutInstagramProfilesInput | LocationCreateOrConnectWithoutInstagramProfilesInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutInstagramProfilesInput | LocationUpsertWithWhereUniqueWithoutInstagramProfilesInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutInstagramProfilesInput | LocationUpdateWithWhereUniqueWithoutInstagramProfilesInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutInstagramProfilesInput | LocationUpdateManyWithWhereWithoutInstagramProfilesInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<EventCreateWithoutDestinationsInput, EventUncheckedCreateWithoutDestinationsInput> | EventCreateWithoutDestinationsInput[] | EventUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDestinationsInput | EventCreateOrConnectWithoutDestinationsInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<GroupCreateWithoutDestinationsInput, GroupUncheckedCreateWithoutDestinationsInput> | GroupCreateWithoutDestinationsInput[] | GroupUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutDestinationsInput | GroupCreateOrConnectWithoutDestinationsInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<LocationCreateWithoutDestinationsInput, LocationUncheckedCreateWithoutDestinationsInput> | LocationCreateWithoutDestinationsInput[] | LocationUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDestinationsInput | LocationCreateOrConnectWithoutDestinationsInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<EventCreateWithoutDestinationsInput, EventUncheckedCreateWithoutDestinationsInput> | EventCreateWithoutDestinationsInput[] | EventUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDestinationsInput | EventCreateOrConnectWithoutDestinationsInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<GroupCreateWithoutDestinationsInput, GroupUncheckedCreateWithoutDestinationsInput> | GroupCreateWithoutDestinationsInput[] | GroupUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutDestinationsInput | GroupCreateOrConnectWithoutDestinationsInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutDestinationsInput = {
    create?: XOR<LocationCreateWithoutDestinationsInput, LocationUncheckedCreateWithoutDestinationsInput> | LocationCreateWithoutDestinationsInput[] | LocationUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDestinationsInput | LocationCreateOrConnectWithoutDestinationsInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<EventCreateWithoutDestinationsInput, EventUncheckedCreateWithoutDestinationsInput> | EventCreateWithoutDestinationsInput[] | EventUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDestinationsInput | EventCreateOrConnectWithoutDestinationsInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutDestinationsInput | EventUpsertWithWhereUniqueWithoutDestinationsInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutDestinationsInput | EventUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: EventUpdateManyWithWhereWithoutDestinationsInput | EventUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<GroupCreateWithoutDestinationsInput, GroupUncheckedCreateWithoutDestinationsInput> | GroupCreateWithoutDestinationsInput[] | GroupUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutDestinationsInput | GroupCreateOrConnectWithoutDestinationsInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutDestinationsInput | GroupUpsertWithWhereUniqueWithoutDestinationsInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutDestinationsInput | GroupUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutDestinationsInput | GroupUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<LocationCreateWithoutDestinationsInput, LocationUncheckedCreateWithoutDestinationsInput> | LocationCreateWithoutDestinationsInput[] | LocationUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDestinationsInput | LocationCreateOrConnectWithoutDestinationsInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutDestinationsInput | LocationUpsertWithWhereUniqueWithoutDestinationsInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutDestinationsInput | LocationUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutDestinationsInput | LocationUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<EventCreateWithoutDestinationsInput, EventUncheckedCreateWithoutDestinationsInput> | EventCreateWithoutDestinationsInput[] | EventUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutDestinationsInput | EventCreateOrConnectWithoutDestinationsInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutDestinationsInput | EventUpsertWithWhereUniqueWithoutDestinationsInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutDestinationsInput | EventUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: EventUpdateManyWithWhereWithoutDestinationsInput | EventUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<GroupCreateWithoutDestinationsInput, GroupUncheckedCreateWithoutDestinationsInput> | GroupCreateWithoutDestinationsInput[] | GroupUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutDestinationsInput | GroupCreateOrConnectWithoutDestinationsInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutDestinationsInput | GroupUpsertWithWhereUniqueWithoutDestinationsInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutDestinationsInput | GroupUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutDestinationsInput | GroupUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutDestinationsNestedInput = {
    create?: XOR<LocationCreateWithoutDestinationsInput, LocationUncheckedCreateWithoutDestinationsInput> | LocationCreateWithoutDestinationsInput[] | LocationUncheckedCreateWithoutDestinationsInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutDestinationsInput | LocationCreateOrConnectWithoutDestinationsInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutDestinationsInput | LocationUpsertWithWhereUniqueWithoutDestinationsInput[]
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutDestinationsInput | LocationUpdateWithWhereUniqueWithoutDestinationsInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutDestinationsInput | LocationUpdateManyWithWhereWithoutDestinationsInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<EventCreateWithoutCategoriesInput, EventUncheckedCreateWithoutCategoriesInput> | EventCreateWithoutCategoriesInput[] | EventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoriesInput | EventCreateOrConnectWithoutCategoriesInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<EventCreateWithoutCategoriesInput, EventUncheckedCreateWithoutCategoriesInput> | EventCreateWithoutCategoriesInput[] | EventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoriesInput | EventCreateOrConnectWithoutCategoriesInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<EventCreateWithoutCategoriesInput, EventUncheckedCreateWithoutCategoriesInput> | EventCreateWithoutCategoriesInput[] | EventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoriesInput | EventCreateOrConnectWithoutCategoriesInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCategoriesInput | EventUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCategoriesInput | EventUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCategoriesInput | EventUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<EventCreateWithoutCategoriesInput, EventUncheckedCreateWithoutCategoriesInput> | EventCreateWithoutCategoriesInput[] | EventUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoriesInput | EventCreateOrConnectWithoutCategoriesInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCategoriesInput | EventUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCategoriesInput | EventUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCategoriesInput | EventUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EventCreateWithoutLocationInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutEventsInput
    destinations?: DestinationCreateNestedManyWithoutEventsInput
    categories?: CategoryCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutLocationInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    groupId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutEventsInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutLocationInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput>
  }

  export type EventCreateManyLocationInputEnvelope = {
    data: EventCreateManyLocationInput | EventCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutLocationsInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutGroupInput
    destinations?: DestinationCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutLocationsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutLocationsInput, GroupUncheckedCreateWithoutLocationsInput>
  }

  export type InstagramProfileCreateWithoutLocationsInput = {
    id?: string
    username: string
    name?: string | null
    followers?: string | null
    followersCount?: number | null
    following?: string | null
    posts?: string | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstagramProfileUncheckedCreateWithoutLocationsInput = {
    id?: string
    username: string
    name?: string | null
    followers?: string | null
    followersCount?: number | null
    following?: string | null
    posts?: string | null
    profilePic?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstagramProfileCreateOrConnectWithoutLocationsInput = {
    where: InstagramProfileWhereUniqueInput
    create: XOR<InstagramProfileCreateWithoutLocationsInput, InstagramProfileUncheckedCreateWithoutLocationsInput>
  }

  export type DestinationCreateWithoutLocationsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutDestinationsInput
    groups?: GroupCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutDestinationsInput
    groups?: GroupUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationCreateOrConnectWithoutLocationsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutLocationsInput, DestinationUncheckedCreateWithoutLocationsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutLocationInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutLocationInput, EventUncheckedUpdateWithoutLocationInput>
    create: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput>
  }

  export type EventUpdateWithWhereUniqueWithoutLocationInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutLocationInput, EventUncheckedUpdateWithoutLocationInput>
  }

  export type EventUpdateManyWithWhereWithoutLocationInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutLocationInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    slug?: StringFilter<"Event"> | string
    durations?: StringNullableFilter<"Event"> | string | null
    details?: StringNullableFilter<"Event"> | string | null
    price?: IntNullableFilter<"Event"> | number | null
    locationId?: StringFilter<"Event"> | string
    groupId?: StringFilter<"Event"> | string
    posterUrls?: StringNullableListFilter<"Event">
    meta?: JsonNullableFilter<"Event">
    includes?: StringNullableListFilter<"Event">
    excludes?: StringNullableListFilter<"Event">
    source?: StringFilter<"Event"> | string
    status?: EnumStatusFilter<"Event"> | $Enums.Status
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type GroupUpsertWithWhereUniqueWithoutLocationsInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutLocationsInput, GroupUncheckedUpdateWithoutLocationsInput>
    create: XOR<GroupCreateWithoutLocationsInput, GroupUncheckedCreateWithoutLocationsInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutLocationsInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutLocationsInput, GroupUncheckedUpdateWithoutLocationsInput>
  }

  export type GroupUpdateManyWithWhereWithoutLocationsInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutLocationsInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    slug?: StringFilter<"Group"> | string
    details?: StringFilter<"Group"> | string
    processedShortBio?: StringNullableFilter<"Group"> | string | null
    processedDescription?: StringNullableFilter<"Group"> | string | null
    instagram?: StringNullableFilter<"Group"> | string | null
    phone?: StringNullableFilter<"Group"> | string | null
    email?: StringNullableFilter<"Group"> | string | null
    meta?: JsonNullableFilter<"Group">
    source?: StringFilter<"Group"> | string
    logo?: StringNullableFilter<"Group"> | string | null
    posterUrls?: StringNullableListFilter<"Group">
    tagLine?: StringNullableFilter<"Group"> | string | null
    status?: EnumStatusFilter<"Group"> | $Enums.Status
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type InstagramProfileUpsertWithWhereUniqueWithoutLocationsInput = {
    where: InstagramProfileWhereUniqueInput
    update: XOR<InstagramProfileUpdateWithoutLocationsInput, InstagramProfileUncheckedUpdateWithoutLocationsInput>
    create: XOR<InstagramProfileCreateWithoutLocationsInput, InstagramProfileUncheckedCreateWithoutLocationsInput>
  }

  export type InstagramProfileUpdateWithWhereUniqueWithoutLocationsInput = {
    where: InstagramProfileWhereUniqueInput
    data: XOR<InstagramProfileUpdateWithoutLocationsInput, InstagramProfileUncheckedUpdateWithoutLocationsInput>
  }

  export type InstagramProfileUpdateManyWithWhereWithoutLocationsInput = {
    where: InstagramProfileScalarWhereInput
    data: XOR<InstagramProfileUpdateManyMutationInput, InstagramProfileUncheckedUpdateManyWithoutLocationsInput>
  }

  export type InstagramProfileScalarWhereInput = {
    AND?: InstagramProfileScalarWhereInput | InstagramProfileScalarWhereInput[]
    OR?: InstagramProfileScalarWhereInput[]
    NOT?: InstagramProfileScalarWhereInput | InstagramProfileScalarWhereInput[]
    id?: StringFilter<"InstagramProfile"> | string
    username?: StringFilter<"InstagramProfile"> | string
    name?: StringNullableFilter<"InstagramProfile"> | string | null
    followers?: StringNullableFilter<"InstagramProfile"> | string | null
    followersCount?: IntNullableFilter<"InstagramProfile"> | number | null
    following?: StringNullableFilter<"InstagramProfile"> | string | null
    posts?: StringNullableFilter<"InstagramProfile"> | string | null
    profilePic?: StringNullableFilter<"InstagramProfile"> | string | null
    createdAt?: DateTimeFilter<"InstagramProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstagramProfile"> | Date | string
  }

  export type DestinationUpsertWithWhereUniqueWithoutLocationsInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutLocationsInput, DestinationUncheckedUpdateWithoutLocationsInput>
    create: XOR<DestinationCreateWithoutLocationsInput, DestinationUncheckedCreateWithoutLocationsInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutLocationsInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutLocationsInput, DestinationUncheckedUpdateWithoutLocationsInput>
  }

  export type DestinationUpdateManyWithWhereWithoutLocationsInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutLocationsInput>
  }

  export type DestinationScalarWhereInput = {
    AND?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    OR?: DestinationScalarWhereInput[]
    NOT?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    id?: StringFilter<"Destination"> | string
    name?: StringFilter<"Destination"> | string
    slug?: StringFilter<"Destination"> | string
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
  }

  export type EventCreateWithoutGroupInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutEventsInput
    destinations?: DestinationCreateNestedManyWithoutEventsInput
    categories?: CategoryCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutGroupInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    locationId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutEventsInput
    categories?: CategoryUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutGroupInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
  }

  export type EventCreateManyGroupInputEnvelope = {
    data: EventCreateManyGroupInput | EventCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutGroupsInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutLocationInput
    instagramProfiles?: InstagramProfileCreateNestedManyWithoutLocationsInput
    destinations?: DestinationCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutGroupsInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
    instagramProfiles?: InstagramProfileUncheckedCreateNestedManyWithoutLocationsInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutGroupsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutGroupsInput, LocationUncheckedCreateWithoutGroupsInput>
  }

  export type DestinationCreateWithoutGroupsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutDestinationsInput
    locations?: LocationCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutDestinationsInput
    locations?: LocationUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationCreateOrConnectWithoutGroupsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutGroupsInput, DestinationUncheckedCreateWithoutGroupsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutGroupInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutGroupInput, EventUncheckedUpdateWithoutGroupInput>
    create: XOR<EventCreateWithoutGroupInput, EventUncheckedCreateWithoutGroupInput>
  }

  export type EventUpdateWithWhereUniqueWithoutGroupInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutGroupInput, EventUncheckedUpdateWithoutGroupInput>
  }

  export type EventUpdateManyWithWhereWithoutGroupInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutGroupInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutGroupsInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutGroupsInput, LocationUncheckedUpdateWithoutGroupsInput>
    create: XOR<LocationCreateWithoutGroupsInput, LocationUncheckedCreateWithoutGroupsInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutGroupsInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutGroupsInput, LocationUncheckedUpdateWithoutGroupsInput>
  }

  export type LocationUpdateManyWithWhereWithoutGroupsInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutGroupsInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    slug?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    posterUrl?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
  }

  export type DestinationUpsertWithWhereUniqueWithoutGroupsInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutGroupsInput, DestinationUncheckedUpdateWithoutGroupsInput>
    create: XOR<DestinationCreateWithoutGroupsInput, DestinationUncheckedCreateWithoutGroupsInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutGroupsInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutGroupsInput, DestinationUncheckedUpdateWithoutGroupsInput>
  }

  export type DestinationUpdateManyWithWhereWithoutGroupsInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutGroupsInput>
  }

  export type GroupCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationCreateNestedManyWithoutGroupsInput
    destinations?: DestinationCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationUncheckedCreateNestedManyWithoutGroupsInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutEventsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
  }

  export type LocationCreateWithoutEventsInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutLocationsInput
    instagramProfiles?: InstagramProfileCreateNestedManyWithoutLocationsInput
    destinations?: DestinationCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutEventsInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutLocationsInput
    instagramProfiles?: InstagramProfileUncheckedCreateNestedManyWithoutLocationsInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutEventsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
  }

  export type DestinationCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutDestinationsInput
    locations?: LocationCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutDestinationsInput
    locations?: LocationUncheckedCreateNestedManyWithoutDestinationsInput
  }

  export type DestinationCreateOrConnectWithoutEventsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutEventsInput, DestinationUncheckedCreateWithoutEventsInput>
  }

  export type CategoryCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutEventsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput>
  }

  export type GroupUpsertWithoutEventsInput = {
    update: XOR<GroupUpdateWithoutEventsInput, GroupUncheckedUpdateWithoutEventsInput>
    create: XOR<GroupCreateWithoutEventsInput, GroupUncheckedCreateWithoutEventsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutEventsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutEventsInput, GroupUncheckedUpdateWithoutEventsInput>
  }

  export type GroupUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUpdateManyWithoutGroupsNestedInput
    destinations?: DestinationUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationUncheckedUpdateManyWithoutGroupsNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type LocationUpsertWithoutEventsInput = {
    update: XOR<LocationUpdateWithoutEventsInput, LocationUncheckedUpdateWithoutEventsInput>
    create: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutEventsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutEventsInput, LocationUncheckedUpdateWithoutEventsInput>
  }

  export type LocationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutLocationsNestedInput
    instagramProfiles?: InstagramProfileUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutLocationsNestedInput
    instagramProfiles?: InstagramProfileUncheckedUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type DestinationUpsertWithWhereUniqueWithoutEventsInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutEventsInput, DestinationUncheckedUpdateWithoutEventsInput>
    create: XOR<DestinationCreateWithoutEventsInput, DestinationUncheckedCreateWithoutEventsInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutEventsInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutEventsInput, DestinationUncheckedUpdateWithoutEventsInput>
  }

  export type DestinationUpdateManyWithWhereWithoutEventsInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutEventsInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutEventsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutEventsInput, CategoryUncheckedUpdateWithoutEventsInput>
    create: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutEventsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutEventsInput, CategoryUncheckedUpdateWithoutEventsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutEventsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutEventsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type LocationCreateWithoutInstagramProfilesInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutLocationInput
    groups?: GroupCreateNestedManyWithoutLocationsInput
    destinations?: DestinationCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutInstagramProfilesInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
    groups?: GroupUncheckedCreateNestedManyWithoutLocationsInput
    destinations?: DestinationUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutInstagramProfilesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutInstagramProfilesInput, LocationUncheckedCreateWithoutInstagramProfilesInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutInstagramProfilesInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutInstagramProfilesInput, LocationUncheckedUpdateWithoutInstagramProfilesInput>
    create: XOR<LocationCreateWithoutInstagramProfilesInput, LocationUncheckedCreateWithoutInstagramProfilesInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutInstagramProfilesInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutInstagramProfilesInput, LocationUncheckedUpdateWithoutInstagramProfilesInput>
  }

  export type LocationUpdateManyWithWhereWithoutInstagramProfilesInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutInstagramProfilesInput>
  }

  export type EventCreateWithoutDestinationsInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutEventsInput
    location: LocationCreateNestedOneWithoutEventsInput
    categories?: CategoryCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutDestinationsInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    locationId: string
    groupId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutDestinationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDestinationsInput, EventUncheckedCreateWithoutDestinationsInput>
  }

  export type GroupCreateWithoutDestinationsInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutGroupInput
    locations?: LocationCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutDestinationsInput = {
    id?: string
    name: string
    slug: string
    details: string
    processedShortBio?: string | null
    processedDescription?: string | null
    instagram?: string | null
    phone?: string | null
    email?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source: string
    logo?: string | null
    posterUrls?: GroupCreateposterUrlsInput | string[]
    tagLine?: string | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutGroupInput
    locations?: LocationUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutDestinationsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutDestinationsInput, GroupUncheckedCreateWithoutDestinationsInput>
  }

  export type LocationCreateWithoutDestinationsInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutLocationInput
    groups?: GroupCreateNestedManyWithoutLocationsInput
    instagramProfiles?: InstagramProfileCreateNestedManyWithoutLocationsInput
  }

  export type LocationUncheckedCreateWithoutDestinationsInput = {
    id?: string
    city: string
    slug: string
    country: string
    posterUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
    groups?: GroupUncheckedCreateNestedManyWithoutLocationsInput
    instagramProfiles?: InstagramProfileUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationCreateOrConnectWithoutDestinationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutDestinationsInput, LocationUncheckedCreateWithoutDestinationsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutDestinationsInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutDestinationsInput, EventUncheckedUpdateWithoutDestinationsInput>
    create: XOR<EventCreateWithoutDestinationsInput, EventUncheckedCreateWithoutDestinationsInput>
  }

  export type EventUpdateWithWhereUniqueWithoutDestinationsInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutDestinationsInput, EventUncheckedUpdateWithoutDestinationsInput>
  }

  export type EventUpdateManyWithWhereWithoutDestinationsInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutDestinationsInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutDestinationsInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutDestinationsInput, GroupUncheckedUpdateWithoutDestinationsInput>
    create: XOR<GroupCreateWithoutDestinationsInput, GroupUncheckedCreateWithoutDestinationsInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutDestinationsInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutDestinationsInput, GroupUncheckedUpdateWithoutDestinationsInput>
  }

  export type GroupUpdateManyWithWhereWithoutDestinationsInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutDestinationsInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutDestinationsInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutDestinationsInput, LocationUncheckedUpdateWithoutDestinationsInput>
    create: XOR<LocationCreateWithoutDestinationsInput, LocationUncheckedCreateWithoutDestinationsInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutDestinationsInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutDestinationsInput, LocationUncheckedUpdateWithoutDestinationsInput>
  }

  export type LocationUpdateManyWithWhereWithoutDestinationsInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutDestinationsInput>
  }

  export type EventCreateWithoutCategoriesInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutEventsInput
    location: LocationCreateNestedOneWithoutEventsInput
    destinations?: DestinationCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    locationId: string
    groupId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    destinations?: DestinationUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutCategoriesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCategoriesInput, EventUncheckedCreateWithoutCategoriesInput>
  }

  export type EventUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCategoriesInput, EventUncheckedUpdateWithoutCategoriesInput>
    create: XOR<EventCreateWithoutCategoriesInput, EventUncheckedCreateWithoutCategoriesInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCategoriesInput, EventUncheckedUpdateWithoutCategoriesInput>
  }

  export type EventUpdateManyWithWhereWithoutCategoriesInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type EventCreateManyLocationInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    groupId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutEventsNestedInput
    destinations?: DestinationUpdateManyWithoutEventsNestedInput
    categories?: CategoryUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutEventsNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutGroupNestedInput
    destinations?: DestinationUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramProfileUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramProfileUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstagramProfileUncheckedUpdateManyWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    followersCount?: NullableIntFieldUpdateOperationsInput | number | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutDestinationsNestedInput
    groups?: GroupUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutDestinationsNestedInput
    groups?: GroupUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyGroupInput = {
    id?: string
    title: string
    slug: string
    durations?: string | null
    details?: string | null
    price?: number | null
    locationId: string
    posterUrls?: EventCreateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventCreateincludesInput | string[]
    excludes?: EventCreateexcludesInput | string[]
    source: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutEventsNestedInput
    destinations?: DestinationUpdateManyWithoutEventsNestedInput
    categories?: CategoryUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutEventsNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutLocationNestedInput
    instagramProfiles?: InstagramProfileUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
    instagramProfiles?: InstagramProfileUncheckedUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutDestinationsNestedInput
    locations?: LocationUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutDestinationsNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutDestinationsNestedInput
    locations?: LocationUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutDestinationsNestedInput
    locations?: LocationUncheckedUpdateManyWithoutDestinationsNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutInstagramProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutLocationNestedInput
    groups?: GroupUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutInstagramProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
    groups?: GroupUncheckedUpdateManyWithoutLocationsNestedInput
    destinations?: DestinationUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutInstagramProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutEventsNestedInput
    location?: LocationUpdateOneRequiredWithoutEventsNestedInput
    categories?: CategoryUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutGroupNestedInput
    locations?: LocationUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutGroupNestedInput
    locations?: LocationUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    processedShortBio?: NullableStringFieldUpdateOperationsInput | string | null
    processedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    source?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrls?: GroupUpdateposterUrlsInput | string[]
    tagLine?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutLocationNestedInput
    groups?: GroupUpdateManyWithoutLocationsNestedInput
    instagramProfiles?: InstagramProfileUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
    groups?: GroupUncheckedUpdateManyWithoutLocationsNestedInput
    instagramProfiles?: InstagramProfileUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutDestinationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutEventsNestedInput
    location?: LocationUpdateOneRequiredWithoutEventsNestedInput
    destinations?: DestinationUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destinations?: DestinationUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    durations?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    posterUrls?: EventUpdateposterUrlsInput | string[]
    meta?: NullableJsonNullValueInput | InputJsonValue
    includes?: EventUpdateincludesInput | string[]
    excludes?: EventUpdateexcludesInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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