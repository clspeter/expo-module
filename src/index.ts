import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoModule.web.ts
// and on native platforms to ExpoModule.ts
import ExpoModule from './ExpoModule';
import ExpoModuleView from './ExpoModuleView';
import { ChangeEventPayload, ExpoModuleViewProps } from './ExpoModule.types';

// Get the native constant value.
export const PI = ExpoModule.PI;

export function hello(): string {
  return ExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoModule ?? NativeModulesProxy.ExpoModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoModuleView, ExpoModuleViewProps, ChangeEventPayload };
