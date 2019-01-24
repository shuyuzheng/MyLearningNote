#%%
# Exercise 4
## 4.1 and 4.2
#%%
guess_me = 7
start = 1
while True:
    if start < guess_me:
        print("Too low")
    elif start > guess_me:
        print("oops")
        break
    else:
        print("found it!")
    start += 1
    
#%%
list = [3, 2, 1, 0]
for i in list:
    print(i)

even_number = [number for number in range(10) if number % 2 == 0]
print(even_number)

square_dic = {key : key**2  for key in range(10)}
print(square_dic)

odd_set = {odd for odd in range(10) if odd % 2 == 1}
print(odd_set)

for i in range(10):
    print("Got" , i)

def good():
    return ['Harry', 'Ron', 'Hermione']

print(good())

def get_odds():
    for i in range(10):
        if i % 2 == 1:
            yield i
n = 0
for i in get_odds():
    if n == 2:
        print(i)
        break
    n += 1

def test(func):
    def new_function(*args, **kargs):
        print('start')
        result = func(*args, **kargs)
        print('End')
        return result
    return new_function

@test
def add_ints(a, b):
    print(int(a + b))

add_ints(5,7)

class OopsException(Exception):
    pass

try:
    raise OopsException()
except OopsException:
    print('Caught an oops')

title = ['Creature of Habit', 'Crewel Fate']
plots = ['A nun turns into a monster', 'A haunted yarn shop']

movie = dict(zip(title, plots))
print(movie)