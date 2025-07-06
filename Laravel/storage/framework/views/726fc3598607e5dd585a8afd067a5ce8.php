<?php $__env->startSection('title', 'Welcome'); ?>

<?php $__env->startSection('content'); ?>
<div class="container text-center py-5">
    <h1 class="display-4">Welcome to Our Store</h1>
    <p class="lead">Discover amazing deals from multiple vendors.</p>
    <a href="<?php echo e(route('shop')); ?>" class="btn btn-primary btn-lg mt-3">Shop Now</a>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Projects\ecommerce-multivendor2\resources\views/frontend/home.blade.php ENDPATH**/ ?>