<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" dir="<?php echo e(app()->getLocale() == 'ar' ? 'rtl' : 'ltr'); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title', 'eCommerce'); ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<?php if(app()->getLocale() == 'ar'): ?>
  <link href="<?php echo e(asset('css/bootstrap.rtl.min.css')); ?>" rel="stylesheet">
<?php else: ?>
  <link href="<?php echo e(asset('css/bootstrap.min.css')); ?>" rel="stylesheet">
<?php endif; ?>
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(asset('css/custom.css')); ?>" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
<?php if(app()->getLocale() == 'ar'): ?>
  <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Cairo', sans-serif; }
  </style>
<?php endif; ?>
</head>
<body class="d-flex flex-column min-vh-100">
    <?php echo $__env->make('partials.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <main class="flex-grow-1 py-4">
        <?php echo $__env->yieldContent('content'); ?>
    </main>

    <?php echo $__env->make('partials.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

    <script src="<?php echo e(asset('js/app.js')); ?>"></script>
    <script src="<?php echo e(asset('js/theme-toggle.js')); ?>"></script>
</body>
</html>
<?php /**PATH D:\Projects\ecommerce-multivendor2\resources\views/layouts/app.blade.php ENDPATH**/ ?>