import React from 'react';
import loadableBase from '@loadable/component';
import { Loading } from '../styles';

const loadable = (func) => loadableBase(func, { fallback: <Loading /> });

export default loadable;
