import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<House, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly thumbnail: string;
  readonly thumbnailAlt: string;
  readonly beds: number;
  readonly rate: number;
  readonly rating: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<House, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly thumbnail: string;
  readonly thumbnailAlt: string;
  readonly beds: number;
  readonly rate: number;
  readonly rating: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type House = LazyLoading extends LazyLoadingDisabled ? EagerHouse : LazyHouse

export declare const House: (new (init: ModelInit<House>) => House) & {
  copyOf(source: House, mutator: (draft: MutableModel<House>) => MutableModel<House> | void): House;
}