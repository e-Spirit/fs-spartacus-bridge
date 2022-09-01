export const preview = {
  preview: {
    dialogs: {
      createPage: {
        duplicatePageError: {
          title: 'Error',
          message: '{{duplicatePageErrorMessage}} Please talk to your manager to solve this error.',
          detailedMessage: 'The page creation failed with the following error message: {{errorMessage}}',
        },
        unexpectedError: {
          title: 'Unexpected error',
          message: 'An unexpected error occurred during page creation. Please try to reload the page.',
          detailedMessage: 'The page creation failed with the following error message: {{errorMessage}}',
        },
        missingPageData: {
          title: 'Error',
          message: 'An error occurred during page creation. Please try to reload the page.',
          detailedMessage: 'The page creation failed because no information about the page was available at runtime.',
        },
        missingRoutingData: {
          title: 'Error',
          message: 'An error occurred during page creation. Please try to reload the page.',
          detailedMessage:
            'The page creation failed because no information about the page was available from the routing service at runtime.',
        },
        missingFsPageMapping: {
          title: 'Configuration error',
          message: 'The FirstSpirit configuration is incorrect and must be adjusted.',
          detailedMessage:
            'The page creation failed with the following error message: Either the script "page_type_mapping" is missing or it did not return a mapping for the current page.',
        },
        missingPageObject: {
          title: 'Error',
          message: 'An error occurred during page creation. Please try to reload the page.',
          detailedMessage:
            'The page creation had to be aborted because the runtime object of the page did not provide all necessary information to execute the request.',
        },
        missingManagedPageConfiguration: {
          title: 'Configuration error',
          message: 'The FsSpartacusBridgeConfig configuration must be updated.',
          detailedMessage:
            'The page creation failed because there is no configuration in FsSpartacusBridgeConfig for the currently viewed page.',
        },
        requestedCaasPageNotAvailableYet: {
          title: 'Error',
          message:
            'The requested page cannot be displayed because it is not yet available in CaaS. Please wait a moment and try to access the page through the search report.',
          detailedMessage: `The page with the reference name '{{pageUid}}' was not found in the CaaS!`,
        },
      },
      createSection: {
        unexpectedError: {
          title: 'Error',
          message: 'An error occurred during section creation. Please try to reload the page.',
          detailedMessage: 'The section creation failed with the following error message: {{errorMessage}}',
        },
      },
      navigationError: {
        hybrisPageIdIsNull: {
          title: 'Error',
          message: 'The requested page cannot be displayed. Please talk to your manager to solve this error.',
          detailedMessage:
            "Can't navigate to element {{previewId}} with uid {{uid}} since the result of the GetHybrisPageId script is null.",
        },
        elementStatusHasNoUid: {
          title: 'Error',
          message: 'The requested page cannot be displayed. Please talk to your manager to solve this error.',
          detailedMessage:
            "Couldn't get the FS uid of the element with the previewId {{previewId}}! Element status: {{elementStatusString}}",
        },
      },
    },
  },
};
