<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7a4e05e539676b5b3fd1d3fbd0d7e516
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'ReallySimpleJWT\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'ReallySimpleJWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/rbdwllr/reallysimplejwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit7a4e05e539676b5b3fd1d3fbd0d7e516::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit7a4e05e539676b5b3fd1d3fbd0d7e516::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit7a4e05e539676b5b3fd1d3fbd0d7e516::$classMap;

        }, null, ClassLoader::class);
    }
}
