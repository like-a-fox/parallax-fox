/* eslint-disable react/prop-types */
import React from 'react';
import 'firebase/auth';
import 'firebase/database';
import { Layout } from './src/components';
export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
