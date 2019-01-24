#%%
# 1, 2, 3.
import unicodedata
mystery = '\U0001f4a9'
unicodedata.name(mystery)
pop_bytes = mystery.encode('utf-8')
print(pop_bytes)
pop_string = pop_bytes.decode('utf-8')
print(pop_string)

#%%
# 4.
poem = str('''
My kitty cat likes %s,
My kitty cat likes %s,
My kitty cat fell on his %s,
and now thinks he's a %s.
''' % ('roast beef', 'ham', 'head', 'clam'))
print(poem)

#%%
# 5,6
letter = str('''
Dear {salutation} {name},

Thank you for your letter. We are sorry that our {product} {verbed} in your
{room}. Please note that it should never be used in a {room}, especially
near any {animals}.

Send us your receipt and {amount} for shipping and handling. We will send
you another {product} that, in our tests, is {percent}% less likely to 
have {verbed}.

Thank you for your support.

Sincerely,
{spokesman}
{job_title}
''')

response = {'salutation':'Mr', 'name':'Smith', 'product':'laptop',
 'verbed':'crashed', 'room':'bathroom', 'animals':'cat', 'amount':'10$',
 'percent':'80', 'spokesman':'Thomas', 'job_title':'Product manager'}

print(letter.format(**response))


#%%
# 6.
poem2 = '''
We have seen thee, queen of cheese,
Lying quietly at your ease,
Gently fanned by evening breeze,
Thy fair form no flies dare seize.
All gaily dressed soon you'll go
To the great Provincial show,
To be admired by many a beau
In the city of Toronto.
Cows numerous as a swarm of bees,
Or as the leaves upon the trees,
It did require to make thee please,
And stand unrivalled, queen of cheese.
May you not receive a scar as
We have heard that Mr. Harris
Intends to send you off as far as
The great world's show at Paris.
Of the youth beware of these,
For some of them might rudely squeeze
And bite your cheek, then songs or glees
We could not sing, oh! queen of cheese.
We'rt thou suspended from balloon,
You'd cast a shade even at noon,
Folks would think it was the moon
About to fall and crush them soon
'''
import re
re.findall(r'\bc.*?\b', poem2)