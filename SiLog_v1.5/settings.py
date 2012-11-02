# -*- coding: utf-8 -*-
# Django settings for the example project.
import os

DEBUG = True
TEMPLATE_DEBUG = True

##LANGUAGE_CODE = 'zh-CN'
LOCALE_PATHS = 'locale'
USE_I18N = True

TEMPLATE_LOADERS=('django.template.loaders.filesystem.load_template_source',
                    'ziploader.zip_loader.load_template_source')