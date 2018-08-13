function fibonacci(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache);
    }
  }
  return cache[index];
}
 
fibonacci(500);