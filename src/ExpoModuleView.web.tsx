import * as React from 'react';

import { ExpoModuleViewProps } from './ExpoModule.types';

export default function ExpoModuleView(props: ExpoModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
