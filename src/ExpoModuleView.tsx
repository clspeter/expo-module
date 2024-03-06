import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoModuleViewProps } from './ExpoModule.types';

const NativeView: React.ComponentType<ExpoModuleViewProps> =
  requireNativeViewManager('ExpoModule');

export default function ExpoModuleView(props: ExpoModuleViewProps) {
  return <NativeView {...props} />;
}
