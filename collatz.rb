def collatz_seq(n, accum = 0)
  return accum if n == 1

  if n.odd?
    collatz_seq(3 * n + 1, accum + 1)
  else
    collatz_seq(n / 2, accum + 1)
  end
end


largest = 0
num = 1

1.upto(1_000_000) do |i|
  p "Doing iteration #{i}" if i % 100 == 0

  largest, num = collatz_seq(i), i if collatz_seq(i) > largest
end

p largest
p num