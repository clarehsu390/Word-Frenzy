def convert(s, num_rows)
    new_arr = Array.new(num_rows) {Array.new}
    s.chars.each_with_index do |ch, idx|
        if idx >= num_rows
            new_arr[(idx-1) % num_rows] << ch
        else
            new_arr[(idx) % num_rows] << ch
        end
    end
        new_arr.join("")
end

p convert("ABC", 2) == "ACB"
