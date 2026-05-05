import core from "ultracite/eslint/core";
import nestjs from "ultracite/eslint/nestjs";
import jest from "ultracite/eslint/jest";

export default [
  ...core,
  ...nestjs,
  ...jest,
  {
    rules: {
      'sonarjs/file-header': 'off',
      'new-cap': [
        'error',
        {
          capIsNewExceptions: [
            'Module',
            'Controller',
            'Injectable',
            'Inject',
            'Global',
            'Get',
            'Post',
            'Put',
            'Patch',
            'Delete',
            'Body',
            'Param',
            'Query',
            'Headers',
            'Req',
            'Res',
            'UsePipes',
            'UseGuards',
            'UseInterceptors',
            'Catch',
            'ExceptionFilter',
            'NestModule',
            'MiddlewareConsumer',
          ],
        },
      ],
      '@typescript-eslint/no-extraneous-class': [
        'error',
        { allowWithDecorator: true },
      ],
    },
  },
];
