<?php

namespace Me\Controller;

use Twig_Environment;

class DefaultController {
    private $twig;

    public function __construct(Twig_Environment $twig) {
        $this->twig = $twig;
    }

    public function indexAction() {
        return $this->twig->render('index.twig');
    }
}