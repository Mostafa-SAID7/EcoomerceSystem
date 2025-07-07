<?php $__env->startSection('content'); ?>
<main class="bg-white text-gray-800 scroll-smooth">

  <!-- Hero Section -->
  <section class="bg-[url('/images/curtain-hero.jpg')] bg-cover bg-center py-32 text-white relative" id="hero" aria-label="Hero Section">
    <div class="max-w-7xl mx-auto px-4 text-center" data-aos="fade-up">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Elegant Curtains for Every Home</h1>
      <p class="text-lg mb-6 max-w-2xl mx-auto drop-shadow-md">
        Discover stylish, custom, and ready-made curtains that transform your space.
      </p>
      <a href="#shop" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-white">Shop Now</a>
    </div>
  </section>

  <!-- Categories -->
  <section class="py-20 bg-gray-50" aria-labelledby="categories">
    <div class="max-w-7xl mx-auto px-4">
      <h2 id="categories" class="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <?php $__currentLoopData = [
          ['image' => 'best-product-1.jpg', 'title' => 'Best Product 1'],
          ['image' => 'best-product-2.jpg', 'title' => 'Sheer Curtains'],
          ['image' => 'best-product-3.jpg', 'title' => 'Luxury Collection'],
          ['image' => 'best-product-4.jpg', 'title' => 'Kids\' Room Curtains']
        ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition" data-aos="zoom-in">
            <img src="<?php echo e(asset('images/' . $cat['image'])); ?>" alt="<?php echo e($cat['title']); ?>" class="h-32 w-full object-cover rounded mb-4">
            <h3 class="font-semibold text-lg"><?php echo e($cat['title']); ?></h3>
          </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </section>

  <!-- Best Sellers -->
  <section id="shop" class="py-20" aria-labelledby="best-sellers">
    <div class="max-w-7xl mx-auto px-4">
      <h2 id="best-sellers" class="text-3xl font-bold text-center mb-12">Best Sellers</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
          <img src="<?php echo e(asset('images/' . $product->image)); ?>" alt="<?php echo e($product->name); ?>" class="w-full h-56 object-cover">
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-1"><?php echo e($product->name); ?></h3>
            <p class="text-sm text-gray-500 mb-2"><?php echo e($product->description); ?></p>
            <div class="flex justify-between items-center">
              <span class="font-bold text-gray-900">$<?php echo e(number_format($product->price, 2)); ?></span>
              <a href="<?php echo e(route('product.show', $product->slug)); ?>" class="text-blue-600 hover:underline text-sm">View</a>
            </div>
          </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </section>

   <!-- 🔥 New Arrivals Section -->
  <section class="py-20 bg-gray-50" aria-labelledby="new-arrivals">
    <div class="max-w-7xl mx-auto px-4">
      <h2 id="new-arrivals" class="text-3xl font-bold text-center mb-12">New Arrivals</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="bg-gray-100 py-20" aria-labelledby="testimonials">
    <div class="max-w-5xl mx-auto px-4">
      <h2 id="testimonials" class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div class="grid gap-8 md:grid-cols-3">
        <?php $__currentLoopData = [
          ['text' => 'Absolutely love the quality and fast delivery! My living room looks so much better now.', 'author' => 'Sarah M.'],
          ['text' => 'Great variety and the customer support was really helpful in helping me choose.', 'author' => 'Jason D.'],
          ['text' => 'Top-notch curtains at affordable prices. Will definitely buy again.', 'author' => 'Lisa K.']
        ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $testimonial): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <blockquote class="bg-white p-6 rounded-lg shadow" data-aos="fade-right">
            <p class="text-sm text-gray-600 mb-4">"<?php echo e($testimonial['text']); ?>"</p>
            <footer class="text-sm font-semibold text-gray-800">— <?php echo e($testimonial['author']); ?></footer>
          </blockquote>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-20" aria-labelledby="why-us">
    <div class="max-w-6xl mx-auto px-4">
      <h2 id="why-us" class="text-3xl font-bold text-center mb-12">Why Shop With Curtain Haven</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <?php $__currentLoopData = [
          ['icon' => '🚚', 'title' => 'Free Shipping', 'desc' => 'On all orders above $50'],
          ['icon' => '💬', 'title' => '24/7 Support', 'desc' => 'Friendly customer service'],
          ['icon' => '↩️', 'title' => 'Easy Returns', 'desc' => '30-day return policy'],
          ['icon' => '🏆', 'title' => 'Quality Guaranteed', 'desc' => 'Trusted materials & fabrics']
        ]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $feature): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
          <div data-aos="zoom-in">
            <div class="text-blue-600 text-3xl mb-2" role="img" aria-label="<?php echo e($feature['title']); ?>"><?php echo e($feature['icon']); ?></div>
            <h3 class="font-semibold text-lg mb-1"><?php echo e($feature['title']); ?></h3>
            <p class="text-sm text-gray-500"><?php echo e($feature['desc']); ?></p>
          </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="bg-blue-600 text-white py-16" aria-labelledby="newsletter">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 id="newsletter" class="text-3xl font-bold mb-4">Stay Updated</h2>
      <p class="mb-6 text-sm">Get exclusive discounts, new arrivals, and curtain styling tips.</p>
      <form class="flex flex-col sm:flex-row justify-center items-center" action="" method="POST">
        <?php echo csrf_field(); ?>
        <label for="email" class="sr-only">Email address</label>
        <input id="email" name="email" type="email" required
          class="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800 mb-3 sm:mb-0 sm:mr-2 focus:outline-none"
          placeholder="Enter your email">
        <button type="submit"
          class="px-5 py-2 bg-white text-blue-600 hover:bg-gray-100 rounded-md font-semibold transition">Subscribe</button>
      </form>
    </div>
  </section>

</main>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\Projects\ecommerce-multivendor2\resources\views/frontend/home.blade.php ENDPATH**/ ?>