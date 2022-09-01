export const preview = {
  preview: {
    dialogs: {
      createPage: {
        duplicatePageError: {
          title: 'Fehler',
          message: '{{duplicatePageErrorMessage}} Bitte sprechen Sie mit Ihrem Manager um diesen Fehler zu beheben.',
          detailedMessage: 'Die Seitenerstellung ist mit folgender Fehlermeldung fehlgeschlagen: {{errorMessage}}',
        },
        unexpectedError: {
          title: 'Unerwarteter Fehler',
          message: 'Während der Erstellung der Seite ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie, die Seite neu zu laden.',
          detailedMessage: 'Die Seitenerstellung ist mit folgender Fehlermeldung fehlgeschlagen: {{errorMessage}}',
        },
        missingPageData: {
          title: 'Fehler',
          message: 'Während der Erstellung der Seite ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie, die Seite neu zu laden.',
          detailedMessage: 'Die Seitenerstellung ist fehlgeschlagen, weil zur Laufzeit keine Informationen zur Seite vorlagen.',
        },
        missingRoutingData: {
          title: 'Fehler',
          message: 'Während der Erstellung der Seite ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie, die Seite neu zu laden.',
          detailedMessage:
            'Die Seitenerstellung ist fehlgeschlagen, weil zur Laufzeit keine Informationen vom RoutingService zur Seite abgefragt werden konnten.',
        },
        missingFsPageMapping: {
          title: 'Konfigurationsfehler',
          message: 'Die FirstSpirit-Konfiguration ist falsch und muss angepasst werden.',
          detailedMessage:
            'Die Seitenerstellung ist mit folgender Fehlermeldung fehlgeschlagen: Entweder fehlt das Skript "page_type_mapping" oder es hat kein Mapping für die aktuelle Seite zurück gegeben.',
        },
        missingPageObject: {
          title: 'Fehler',
          message: 'Während der Erstellung der Seite ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie, die Seite neu zu laden.',
          detailedMessage:
            'Die Seitenerstellung musste abgebrochen werden, weil das Laufzeitobjekt der Seite nicht alle nötigen Informationen geliefert hat, um die Anfrage durchzuführen.',
        },
        missingManagedPageConfiguration: {
          title: 'Konfigurationsfehler',
          message: 'Die FsSpartacusBridgeConfig-Konfiguration muss im Storefront-Projekt aktualisiert werden.',
          detailedMessage:
            'Die Seitenerstellung ist fehlgeschlagen, weil für die aktuell betrachtete Seite keine Konfiguration in der FsSpartacusBridgeConfig existiert.',
        },
        requestedCaasPageNotAvailableYet: {
          title: 'Fehler',
          message:
            'Die angeforderte Seite kann nicht dargestellt werden, da sie noch nicht im CaaS verfügbar ist. Bitte warten Sie einen kurzen Moment und probieren Sie, die Seite über den Suchreport erneut aufzurufen.',
          detailedMessage: `Die Seite mit dem Referenznamen '{{pageUid}}' wurde nicht im CaaS gefunden und ist vermutlich noch nicht verfügbar!`,
        },
      },
      createSection: {
        unexpectedError: {
          title: 'Fehler',
          message:
            'Während der Erstellung des Absatzes ist ein Fehler aufgetreten. Bitte versuchen Sie, die Seite neu zu laden und den Absatz noch einmal zu erstellen.',
          detailedMessage: 'Die Absatzerstellung ist mit folgender Fehlermeldung fehlgeschlagen: {{errorMessage}}',
        },
      },
      navigationError: {
        hybrisPageIdIsNull: {
          title: 'Fehler',
          message: 'Die angeforderte Seite kann nicht dargestellt werden. Bitte kontaktieren Sie Ihren Administrator.',
          detailedMessage:
            'Navigation zu dem Element {{previewId}} mit der UID {{uid}} ist nicht möglich, weil der Skriptaufruf GetHybrisPageId null als Ergebnis zurückgeliefert hat.',
        },
        elementStatusHasNoUid: {
          title: 'Fehler',
          message: 'Die angeforderte Seite kann nicht dargestellt werden. Bitte kontaktieren Sie Ihren Administrator.',
          detailedMessage:
            'Die FS UID des Elements mit der previewId {{previewId}} konnte nicht ermittelt werden. Status des Elements: {{elementStatusString}}',
        },
      },
    },
  },
};
