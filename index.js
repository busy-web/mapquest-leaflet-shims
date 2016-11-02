/* jshint node: true */
'use strict';

module.exports = {
  name: 'mapquest-leaflet-shims',

  contentFor: function(type, config) {
    if (type === 'body-footer') {
      const baseURL = 'https://www.mapquestapi.com/sdk/leaflet';
      let MQConfig = config.MapQuestAPI || null;
      if (MQConfig) {
        let key = MQConfig.key || '';
        let version = MQConfig.apiVersion || '2.2';
        let maps = MQConfig.maps || 'true';
        let geocoding = MQConfig.geocoding || 'false';
        let routing = MQConfig.routing || 'false';
        let traffic = MQConfig.traffic || 'false';
        let scriptIncludes = '';
        if (maps === 'true') {
          scriptIncludes += `<script src="${baseURL}/v${version}/mq-map.js?key=${key}"></script>`;
        }
        if (geocoding === 'true') {
          scriptIncludes += `<script src="${baseURL}/v${version}/mq-geocoding.js?key=${key}"></script>`;
        }
        if (routing === 'true') {
          scriptIncludes += `<script src="${baseURL}/v${version}/mq-routing.js?key=${key}"></script>`;
        }
        if (traffic === 'true') {
          scriptIncludes += `<script src="${baseURL}/v${version}/mq-traffic.js?key=${key}"></script>`;
        }
        return scriptIncludes;
      }
    }
  }
};
