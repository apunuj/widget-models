var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var positionChoices = [];
var fontChoices = [];
var animationChoices = [];
var inputFieldChoices = [];
var finalActionChoices = [];
var periodChoices = [];
var dayChoices = [];
var browserChoices = [];
var osChoices = [];
var deviceChoices = [];
var emailFrequencyChoices = [];
var thirdPartyChoices = [];

var ContactFormSchema = new Schema({
  position: {
    type: String,
    enum: positionChoices
  },

  appearance: {
    colorTheme: {
      background: String,
      header-text: String,
      text: String,
      button: String,
      button-text: String
    },
    font: { type: String, enum: fontChoices },
    animation: { type: String, enum: animationChoices }
  },

  content: {
    title: String,
    description: String,
    inputFields: {
      type: inputFieldChoices,
      emailValue: String,
      nameValue: String,
      emailPlaceholder: String,
      namePlaceholder: String
    }
    buttonText: String,
    note: String
  },

  successPage: {
    title: String,
    description: String,
    finalAction: {type: String, enum: finalActionChoices},
    redirectUrl: String
  },

  behavior: {
    displayStart: {
      atOnce: Boolean,
      conditional: {
        flag: Boolean,
        leaving: Boolean,
        progress: Number,
        time: Number
      }
    },
    frequency: {
      everyView: Boolean,
      limited: {
        flag: Boolean,
        max: Number,
        period: periodChoices
      }
    },
    displayStop: {
      never: Boolean,
      conditional: {
        flag: Boolean,
        afterAction: Boolean,
        maxDisplays: Number
      }
    },
    duration: {
      startDateAndTime: Date,
      endDateAndTime: Date,
      timeZone: String
    },
    days: [{type: String, enum: dayChoices}]
  },

  targeting: {
    pages: [String],
    segment: {
      visitors: {
        returning: Boolean,
        visitedPages: Number
      },
      browsers: {
        type: String,
        enum: browserChoices
      },
      os: {
        type: String,
        enum: osChoices
      },
      devices: {
        type: String,
        enum: deviceChoices
      },
      referrerUrl: String,
      exceptions: {
        utmTags: [String],
        ipAddresses: [String],
        locations: [String]
      }
    }
  },

  integrations: {
    email: {
      enable: Boolean,
      id: String,
      frequency: {type: String, enum: emailFrequencyChoices}
    },
    autoresponder: Boolean,
    webhooks: {
      enable: Boolean,
      url: String
    },
    thirdParty: [{type: String, enum: thirdPartyChoices}]
  }

});

var ContactForm = mongoose.model('ContactForm', ContactFormSchema);

module.exports = ContactForm;
