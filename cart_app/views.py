from django.shortcuts import render
from .models import *
from user_app.models import Account, CartItem
from django.http import JsonResponse
from .utils import total_price
from .telegram import send_message_tg

# Create your views here.
def show_cart(request):
    context = {}
    account = Account.objects.get(user = request.user)
    cartItems = CartItem.objects.filter(account = account)
    products_in_cart = cartItems
    context['products_in_cart'] = products_in_cart
    full_price = total_price(products_in_cart)
    context['full_price'] = full_price

    user_order = ''
    for product_index, product_in_cart in enumerate(products_in_cart):
        user_order += f'{product_in_cart.product.name} у кількості: {[product_in_cart.count]}'
        if len(products_in_cart)-1 != product_index:
            user_order += '); '
        else:
            user_order += ')'
    
    chatid = -987070536
    message = f"Новий заказ!\nІм'я: {account.name}.\nЗаказ: {user_order}.\nЗагальна ціна: {full_price}грн"
    print(message)
    if request.method == 'POST':
        send_message_tg(chatid, message)
        CartItem.objects.all().delete()
    return render(request, 'cart.html', context)

def show_full_price(request):
    account = Account.objects.get(user = request.user)
    cartItems = CartItem.objects.filter(account = account)
    full_price = total_price(cartItems)
    return JsonResponse({'full_price': full_price})


def delete_from_cart(request):
    # pass
    if request.method == 'POST':
        account = Account.objects.get(user = request.user)
        cartItems = CartItem.objects.filter(account = account)
        # print(request.POST.get("cartItemId"))
        # cart_item = CartItem.objects.get(id = request.POST.get("cartItemId"))
        # cart_item.delete()

        # print(product_in_cart)

        CartItem.objects.get(pk = request.POST.get('cartItemId')).delete()
        print(request.POST, 'text')
        account = Account.objects.get(user = request.user)
        cartItems = CartItem.objects.filter(account = account)
        full_price = total_price(cartItems)
    return JsonResponse({'full_price': full_price})

def get_receipt(request):
    account = Account.objects.get(user = request.user)
    return JsonResponse({'receipt':CartItem.objects.filter(account = account)})