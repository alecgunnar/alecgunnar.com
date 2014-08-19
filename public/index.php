<?php

define('ROOT', dirname(__DIR__) . '/');

require ROOT . 'vendor/autoload.php';

$app = new Maverick\Application();

$app->services->register('twig', function() {
    $loader = new Twig_Loader_Filesystem(ROOT . 'src/Me/views/');
    return new Twig_Environment($loader);
});

$app->services->register('default.controller', function($mgr) {
    return new Me\Controller\DefaultController($mgr->get('twig'));
});

$app->services->replace('exception.controller', function($mgr) {
    return new Me\Controller\ExceptionController($mgr->get('twig'));
});

$app->router->match('*', '/', function() use($app) {
    return $app->services->get('default.controller')->indexAction();
});

$app->finish();