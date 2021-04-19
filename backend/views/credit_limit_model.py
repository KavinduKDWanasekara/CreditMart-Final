def factorial(num):
    factorial = 1
    if num < 0:
        return 0
    elif num == 0:
        return 1

    else:
        for i in range(1, num + 1):
            factorial = factorial * i
        return factorial


# import matplotlib.pyplot as plt
import math
import statistics


def probability_density(pd, num_of_ran_scenarios):
    probs = []
    index = []
    num = num_of_ran_scenarios
    for i in range(num):
        c = factorial(num) / (factorial(i) * factorial(num - i))
        bp = c * math.pow(pd, i) * math.pow((1 - pd), num - 1)
        probs.append(bp)
        index.append(i)

    mean = statistics.mean(probs)
    # print("mean of sample is % s " % (mean))

    # plt.plot(index, probs)
    # plt.title('Probability density')
    # plt.xlabel('number of random scenarios')
    # plt.ylabel('probability')
    # plt.show()
    return probs


def lossFunction(probs):
    finitesum = 0
    for i in probs:
        finitesum = finitesum + i * (probs.index(i) + 1)

    return finitesum


def cvar(loss, alpa=0.5):
    return (1 / (1 - alpa)) * loss


def margin(pd, sales):
    prob_list = probability_density(pd, 20)

    loss = lossFunction(prob_list)

    return cvar(loss) * sales
