'use strict';

import angular from 'angular';
import barcodeReader from '../src/barcode-reader';
let example = angular.module('barcodeReaderExample', ['barcodeReader']);
example.controller('MainController', function ($scope) {
    $scope.words = [];
    $scope.triggerChar = 9;
    $scope.separatorChar = 13;
    $scope.triggerCallback = function () {
        $scope.lastTrigger = 'Last trigger callback: ' + new Date().toISOString();
        $scope.$apply();
    };
    $scope.scanCallback = function (word) {
        $scope.words.push(word);
        $scope.$apply();
    };
});