<?php

namespace Me\Controller;

use Twig_Environment,
    Maverick\Http\Response,
    Maverick\Controller\ExceptionController as EC,
    Exception;

class ExceptionController extends EC {
    protected $twig;

    public function __construct(Twig_Environment $twig) {
        $this->twig = $twig;
    }

    public function error500Action(Exception $e) {
        return $this->twig->render('errors/500.twig');
    }

    public function error404Action(Exception $e) {
        return $this->twig->render('errors/404.twig');
    }
}