<?php

namespace Me\Controller;

use Twig_Environment,
    Maverick\Http\Response,
    Maverick\Controller\ExceptionController as EC,
    Exception;

class ExceptionController extends EC {
    protected $twig;

    public function __construct(Twig_Environment $twig, Response $response ) {
        $this->twig     = $twig;
        $this->response = $response;
    }

    public function showErrorAction(Exception $e) {
        $code = 500;

        if(get_class($e) == 'Maverick\Exception\NoRouteException') {
            $code = 404;
        }

        $this->response->setStatus($code);

        return $this->twig->render('error.twig', ['code' => $code]);
    }
}