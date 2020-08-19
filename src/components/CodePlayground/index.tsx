import React, { Fragment } from 'react';
import { useView, Compiler, Editor, Error } from 'react-view';
import presetTypescript from '@babel/preset-typescript';

export default ({ initialCode }) => {
  const params = useView({
    initialCode,
    scope: {},
    onUpdate: console.log,
  });

  return (
    <Fragment>
      <Compiler {...params.compilerProps} presets={[presetTypescript]} />
      <Editor {...params.editorProps} language="tsx" />
      <Error {...params.errorProps} />
    </Fragment>
  );
};
