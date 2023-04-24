/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStylesServer, ServerStyles } from '@k-link/ssr';

const stylesServer = createStylesServer();

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);
  setHeadComponents([<ServerStyles html={html} server={stylesServer} key="k-link-styles" />]);
  replaceBodyHTMLString(html);
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
};
