/**
 * @fileoverview Basically, what this file does is to export all the modules
 * from the lib folder.
 * @description This file exports all the modules from the lib folder.
 * Essentially, this file is the entry point for the lib folder, and the lib folder
 * itself is a collection of all external libraries that we use in our project.
 * That is, we wrap all external libraries in our own code, which exports them
 * in a way that we want.
 * This is a good way to organize our code, and it makes it easier to maintain.
 * @example
 * import axios from 'lib';
 * import 'toastify' from 'lib';
 *
 * ! Make sure to wrap all external libraries in this folder
 */

export * from './Router/AppRouter';
export * from './class/ClassNames';
