def getProbabilityOfDefault(current_assets, current_liabilities, working_capital, total_assets, cash_equivalents,
                            net_income,
                            receivables_turnover, total_shareholders_equity, total_debt, interest_expenses,
                            return_on_equity,
                            ebit, total_liabilities, long_term_debt, revenue, net_profit_margin,
                            investment_purchases_sales, avg_inventory, receivables):
    indicator01 = current_assets / current_liabilities
    indicator02 = working_capital / total_assets
    indicator03 = current_liabilities / current_assets
    indicator04 = (revenue * net_profit_margin) / investment_purchases_sales
    indicator05 = cash_equivalents / current_liabilities
    indicator06 = (total_liabilities - cash_equivalents) / investment_purchases_sales
    indicator07 = net_income / return_on_equity
    indicator08 = net_income / receivables_turnover
    indicator09 = ebit / total_assets
    indicator10 = total_debt / total_shareholders_equity
    indicator11 = total_debt / total_assets
    indicator12 = ebit / interest_expenses
    indicator13 = total_liabilities / total_assets
    indicator14 = total_shareholders_equity / total_assets
    indicator15 = long_term_debt / total_assets
    indicator17 = total_debt / current_assets
    indicator18 = total_debt / (total_assets - total_debt)
    indicator19 = total_debt / total_liabilities
    indicator20 = ebit / total_assets
    indicator21 = (current_assets - avg_inventory - receivables) / total_liabilities

    import pickle
    with open("probability_of_default_model.pkl", 'rb') as file:
        PD_Model = pickle.load(file)

    with open("scaler.pkl", 'rb') as file:
        scaler = pickle.load(file)
    prediction = PD_Model.predict([[indicator01, indicator02, indicator02, indicator03, indicator04,
                                                  indicator05, indicator06, indicator07, indicator08, indicator09,
                                                  indicator10, indicator11, indicator12, indicator13, indicator14,
                                                  indicator15, indicator17, indicator18, indicator19, indicator20,
                                                  indicator21]])
    return prediction


def financialData():
    current_assets = 1000
    current_liabilities = 2000
    working_capital = 100
    total_assets = 100
    cash_equivalents = 100
    net_income = 100
    receivables_turnover = 100
    total_shareholders_equity = 100
    total_debt = 2000
    interest_expenses = 130
    return_on_equity = 400
    ebit = 100
    total_liabilities = 100
    long_term_debt = 100
    revenue = 100
    net_profit_margin = 100
    investment_purchases_sales = 100
    avg_inventory = 100
    receivables = 100

    result = getProbabilityOfDefault(current_assets, current_liabilities, working_capital, total_assets,
                                     cash_equivalents,
                                     net_income,
                                     receivables_turnover, total_shareholders_equity, total_debt, interest_expenses,
                                     return_on_equity,
                                     ebit, total_liabilities, long_term_debt, revenue, net_profit_margin,
                                     investment_purchases_sales, avg_inventory, receivables)

    print(result)


financialData()