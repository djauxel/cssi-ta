# def pluralize1(number, word):
#     if number > 0:
#         if 'ife' in word:
#             word = word.replace('ife', 'ives')
#         elif 'sh' in word or 'ch' in word:
#             word = word + 'es'
#         elif 'us' in word:
#             word = word.replace('us', 'i')
#         elif 'ay' in word or 'oy' in word or 'ey' in word or 'uy' in word:
#             word = word + 's'
#         elif 'y' in word:
#             word = word.replace('y', 'ies')
#         else:
#             word = word + 's'
#         print('Out: ' + word)
#     else:
#         print('Out: ' + word)

# pluralize1(number, word)

def pluralize2(number, word):
    if number > 0:
        if word[-3:] == 'ife':
            word = word[:-3] + 'ives'
        elif word[-2:] == 'sh' or word[-2:] == 'ch':
            word = word + 'es'
        elif word[-2:] == 'us':
            word = word[:-2] + 'i'
        elif word[-2:] == 'ay' or word[-2:] == 'oy' or word[-2:] == 'ey' or word[-2:] == 'uy':
            word = word + 's'
        elif word[-1:] == 'y':
            word = word[:-1] + 'ies'
        else:
            word = word + 's'
        print('Out: ' + word)
    else:
        print('Out: ' + word)

times = int(raw_input('How many times?: '))
for i in range(times):
    number = int(raw_input('Enter a number: '))
    word = raw_input('Enter a word: ')
    pluralize2(number, word)
    print('\n')