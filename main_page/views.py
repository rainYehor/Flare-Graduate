from django.shortcuts import render
from django.http import JsonResponse
from user_app.models import Account
from menu_app.models import Product
from contact_app.models import Contact


def show_main(request):
    context = {}
    all_products = Product.objects.all()
    context['all_products'] = all_products
    all_contacts = Contact.objects.all()
    context['all_contacts'] = all_contacts

    return render(request, 'main.html', context)
