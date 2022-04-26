import { Meteor } from 'meteor/meteor';
import Schema from '../../../server/schemas/accounts/schema';
import faker from 'faker';
import Countries from '../../../constants/countries';
import _ from 'lodash';

const isoLangs = {
  'ab': { 'name': 'Abkhaz', 'code': 'ab', 'native': 'аҧсуа', 'icon': 'flag-icon-ru' },
  'aa': { 'name': 'Afar', 'code': 'aa', 'native': 'Afaraf', 'icon': 'flag-icon-et' },
  'af': { 'name': 'Afrikaans', 'code': 'af', 'native': 'Afrikaans', 'icon': 'flag-icon-za' },
  'ak': { 'name': 'Akan', 'code': 'ak', 'native': 'Akan', 'icon': 'flag-icon-gh' },
  'sq': { 'name': 'Albanian', 'code': 'sq', 'native': 'Shqip', 'icon': 'flag-icon-al' },
  'am': { 'name': 'Amharic', 'code': 'am', 'native': 'አማርኛ', 'icon': 'flag-icon-et' },
  'ar': { 'name': 'Arabic', 'code': 'ar', 'native': 'العربية', 'icon': 'flag-icon-sa' },
  'an': { 'name': 'Aragonese', 'code': 'an', 'native': 'Aragonés', 'icon': 'flag-icon-es' },
  'hy': { 'name': 'Armenian', 'code': 'hy', 'native': 'Հայերեն', 'icon': 'flag-icon-am' },
  'as': { 'name': 'Assamese', 'code': 'as', 'native': 'অসমীয়া', 'icon': 'flag-icon-in' },
  'av': { 'name': 'Avaric', 'code': 'av', 'native': 'авар мацӀ, магӀарул мацӀ', 'icon': 'flag-icon-ru' },
  'ay': { 'name': 'Aymara', 'code': 'ay', 'native': 'aymar aru', 'icon': 'flag-icon-cl' },
  'az': { 'name': 'Azerbaijani', 'code': 'az', 'native': 'azərbaycan dili', 'icon': 'flag-icon-az' },
  'bm': { 'name': 'Bambara', 'code': 'bm', 'native': 'Bamanankan', 'icon': 'flag-icon-ml' },
  'ba': { 'name': 'Bashkir', 'code': 'ba', 'native': 'башҡорт теле', 'icon': 'flag-icon-ru' },
  'eu': { 'name': 'Basque', 'code': 'eu', 'native': 'Euskara, euskera', 'icon': 'flag-icon-es' },
  'be': { 'name': 'Belarusian', 'code': 'be', 'native': 'Беларуская', 'icon': 'flag-icon-by' },
  'bn': { 'name': 'Bengali', 'code': 'bn', 'native': 'বাংলা', 'icon': 'flag-icon-in' },
  'bh': { 'name': 'Bihari', 'code': 'bh', 'native': 'भोजपुरी', 'icon': 'flag-icon-in' },
  'bi': { 'name': 'Bislama', 'code': 'bi', 'native': 'Bislama', 'icon': 'flag-icon-vu' },
  'bs': { 'name': 'Bosnian', 'code': 'bs', 'native': 'Bosanski jezik', 'icon': 'flag-icon-ba' },
  'br': { 'name': 'Breton', 'code': 'br', 'native': 'Brezhoneg', 'icon': 'flag-icon-fr' },
  'bg': { 'name': 'Bulgarian', 'code': 'bg', 'native': 'български език', 'icon': 'flag-icon-bg' },
  'my': { 'name': 'Burmese', 'code': 'my', 'native': 'ဗမာစာ', 'icon': 'flag-icon-mm' },
  'ca': { 'name': 'Catalan', 'code': 'ca', 'native': 'Català', 'icon': 'flag-icon-ad' },
  'ch': { 'name': 'Chamorro', 'code': 'ch', 'native': 'Chamoru', 'icon': 'flag-icon-gu' },
  'ce': { 'name': 'Chechen', 'code': 'ce', 'native': 'нохчийн мотт', 'icon': 'flag-icon-ru' },
  'ny': { 'name': 'Chichewa', 'code': 'ny', 'native': 'ChiCheŵa', 'icon': 'flag-icon-mw' },
  'zh': { 'name': 'Chinese', 'code': 'zh', 'native': '中文', 'icon': 'flag-icon-cn' },
  'cv': { 'name': 'Chuvash', 'code': 'cv', 'native': 'чӑваш чӗлхи', 'icon': 'flag-icon-ru' },
  'kw': { 'name': 'Cornish', 'code': 'kw', 'native': 'Kernewek', 'icon': 'flag-icon-gb' },
  'co': { 'name': 'Corsican', 'code': 'co', 'native': 'Corsu, lingua corsa', 'icon': 'flag-icon-fr' },
  'cr': { 'name': 'Cree', 'code': 'cr', 'native': 'ᓀᐦᐃᔭᐍᐏᐣ', 'icon': 'flag-icon-ca' },
  'hr': { 'name': 'Croatian', 'code': 'hr', 'native': 'Hrvatski', 'icon': 'flag-icon-hr' },
  'cs': { 'name': 'Czech', 'code': 'cs', 'native': 'česky, čeština', 'icon': 'flag-icon-cz' },
  'da': { 'name': 'Danish', 'code': 'da', 'native': 'Dansk', 'icon': 'flag-icon-dk' },
  'dv': { 'name': 'Divehi', 'code': 'dv', 'native': 'ދިވެހި', 'icon': 'flag-icon-mv' },
  'nl': { 'name': 'Dutch', 'code': 'nl', 'native': 'Nederlands, Vlaams', 'icon': 'flag-icon-nl' },
  'en': { 'name': 'English', 'code': 'en', 'native': 'English', 'icon': 'flag-icon-us' },
  'et': { 'name': 'Estonian', 'code': 'et', 'native': 'Eesti, eesti keel', 'icon': 'flag-icon-ee' },
  'ee': { 'name': 'Ewe', 'code': 'ee', 'native': 'Eʋegbe', 'icon': 'flag-icon-gh' },
  'fo': { 'name': 'Faroese', 'code': 'fo', 'native': 'føroyskt', 'icon': 'flag-icon-dk' },
  'fj': { 'name': 'Fijian', 'code': 'fj', 'native': 'vosa Vakaviti', 'icon': 'flag-icon-fj' },
  'fi': { 'name': 'Finnish', 'code': 'fi', 'native': 'suomi, suomen kieli', 'icon': 'flag-icon-fi' },
  'fr': { 'name': 'French', 'code': 'fr', 'native': 'français', 'icon': 'flag-icon-fr' },
  'gl': { 'name': 'Galician', 'code': 'gl', 'native': 'Galego', 'icon': 'flag-icon-es' },
  'ka': { 'name': 'Georgian', 'code': 'ka', 'native': 'ქართული', 'icon': 'flag-icon-ge' },
  'de': { 'name': 'German', 'code': 'de', 'native': 'Deutsch', 'icon': 'flag-icon-de' },
  'el': { 'name': 'Greek', 'code': 'el', 'native': 'Ελληνικά', 'icon': 'flag-icon-gr' },
  'gn': { 'name': 'Guaraní', 'code': 'gn', 'native': 'Avañeẽ', 'icon': 'flag-icon-py' },
  'gu': { 'name': 'Gujarati', 'code': 'gu', 'native': 'ગુજરાતી', 'icon': 'flag-icon-in' },
  'ht': { 'name': 'Haitian', 'code': 'ht', 'native': 'Kreyòl ayisyen', 'icon': 'flag-icon-ht' },
  'ha': { 'name': 'Hausa', 'code': 'ha', 'native': 'Hausa, هَوُسَ', 'icon': 'flag-icon-ng' },
  'he': { 'name': 'Hebrew', 'code': 'he', 'native': 'עברית', 'icon': 'flag-icon-il' },
  'hi': { 'name': 'Hindi', 'code': 'hi', 'native': 'हिन्दी, हिंदी', 'icon': 'flag-icon-in' },
  'ho': { 'name': 'Hiri Motu', 'code': 'ho', 'native': 'Hiri Motu', 'icon': 'flag-icon-pg' },
  'hu': { 'name': 'Hungarian', 'code': 'hu', 'native': 'Magyar', 'icon': 'flag-icon-hu' },
  'id': { 'name': 'Indonesian', 'code': 'id', 'native': 'Bahasa Indonesia', 'icon': 'flag-icon-id' },
  'ga': { 'name': 'Irish', 'code': 'ga', 'native': 'Gaeilge', 'icon': 'flag-icon-gb' },
  'ig': { 'name': 'Igbo', 'code': 'ig', 'native': 'Asụsụ Igbo', 'icon': 'flag-icon-ng' },
  'ik': { 'name': 'Inupiaq', 'code': 'ik', 'native': 'Iñupiaq, Iñupiatun', 'icon': 'flag-icon-us' },
  'is': { 'name': 'Icelandic', 'code': 'is', 'native': 'Íslenska', 'icon': 'flag-icon-is' },
  'it': { 'name': 'Italian', 'code': 'it', 'native': 'Italiano', 'icon': 'flag-icon-it' },
  'iu': { 'name': 'Inuktitut', 'code': 'iu', 'native': 'ᐃᓄᒃᑎᑐᑦ', 'icon': 'flag-icon-ca' },
  'ja': { 'name': 'Japanese', 'code': 'ja', 'native': '日本語', 'icon': 'flag-icon-jp' },
  'jv': { 'name': 'Javanese', 'code': 'jv', 'native': 'basa Jawa', 'icon': 'flag-icon-id' },
  'kl': { 'name': 'Kalaallisut', 'code': 'kl', 'native': 'kalaallisut', 'icon': 'flag-icon-gl' },
  'kn': { 'name': 'Kannada', 'code': 'kn', 'native': 'ಕನ್ನಡ', 'icon': 'flag-icon-in' },
  'kr': { 'name': 'Kanuri', 'code': 'kr', 'native': 'Kanuri', 'icon': 'flag-icon-ng' },
  'ks': { 'name': 'Kashmiri', 'code': 'ks', 'native': 'कश्मीरी, كشميري‎', 'icon': 'flag-icon-in' },
  'kk': { 'name': 'Kazakh', 'code': 'kk', 'native': 'Қазақ тілі', 'icon': 'flag-icon-kz' },
  'km': { 'name': 'Khmer', 'code': 'km', 'native': 'ភាសាខ្មែរ', 'icon': 'flag-icon-kh' },
  'ki': { 'name': 'Kikuyu', 'code': 'ki', 'native': 'Gĩkũyũ', 'icon': 'flag-icon-ke' },
  'rw': { 'name': 'Kinyarwanda', 'code': 'rw', 'native': 'Ikinyarwanda', 'icon': 'flag-icon-rw' },
  'ky': { 'name': 'Kirghiz', 'code': 'ky', 'native': 'кыргыз тили', 'icon': 'flag-icon-kg' },
  'kv': { 'name': 'Komi', 'code': 'kv', 'native': 'коми кыв', 'icon': 'flag-icon-ru' },
  'kg': { 'name': 'Kongo', 'code': 'kg', 'native': 'KiKongo', 'icon': 'flag-icon-cd' },
  'ko': { 'name': 'Korean', 'code': 'ko', 'native': '한국어', 'icon': 'flag-icon-kr' },
  'ku': { 'name': 'Kurdish', 'code': 'ku', 'native': 'كوردی‎', 'icon': 'flag-icon-iq' },
  'kj': { 'name': 'Kwanyama', 'code': 'kj', 'native': 'Kuanyama', 'icon': 'flag-icon-ao' },
  'lb': { 'name': 'Luxembourgish', 'code': 'lb', 'native': 'Lëtzebuergesch', 'icon': 'flag-icon-lu' },
  'lg': { 'name': 'Luganda', 'code': 'lg', 'native': 'Luganda', 'icon': 'flag-icon-ug' },
  'li': { 'name': 'Limburgish', 'code': 'li', 'native': 'Limburgs', 'icon': 'flag-icon-nl' },
  'ln': { 'name': 'Lingala', 'code': 'ln', 'native': 'Lingála', 'icon': 'flag-icon-cd' },
  'lo': { 'name': 'Lao', 'code': 'lo', 'native': 'ພາສາລາວ', 'icon': 'flag-icon-la' },
  'lt': { 'name': 'Lithuanian', 'code': 'lt', 'native': 'lietuvių kalba', 'icon': 'flag-icon-lt' },
  'lv': { 'name': 'Latvian', 'code': 'lv', 'native': 'latviešu valoda', 'icon': 'flag-icon-lv' },
  'gv': { 'name': 'Manx', 'code': 'gv', 'native': 'Gaelg, Gailck', 'icon': 'flag-icon-im' },
  'mk': { 'name': 'Macedonian', 'code': 'mk', 'native': 'македонски јазик', 'icon': 'flag-icon-mk' },
  'mg': { 'name': 'Malagasy', 'code': 'mg', 'native': 'Malagasy fiteny', 'icon': 'flag-icon-mg' },
  'ms': { 'name': 'Malay', 'code': 'ms', 'native': 'بهاس ملايو‎', 'icon': 'flag-icon-my' },
  'ml': { 'name': 'Malayalam', 'code': 'ml', 'native': 'മലയാളം', 'icon': 'flag-icon-in' },
  'mt': { 'name': 'Maltese', 'code': 'mt', 'native': 'Malti', 'icon': 'flag-icon-mt' },
  'mi': { 'name': 'Māori', 'code': 'mi', 'native': 'te reo Māori', 'icon': 'flag-icon-nz' },
  'mr': { 'name': 'Marathi', 'code': 'mr', 'native': 'मराठी', 'icon': 'flag-icon-in' },
  'mh': { 'name': 'Marshallese', 'code': 'mh', 'native': 'Kajin M̧ajeļ', 'icon': 'flag-icon-mh' },
  'mn': { 'name': 'Mongolian', 'code': 'mn', 'native': 'монгол', 'icon': 'flag-icon-mn' },
  'na': { 'name': 'Nauru', 'code': 'na', 'native': 'Ekakairũ Naoero', 'icon': 'flag-icon-nr' },
  'nv': { 'name': 'Navajo', 'code': 'nv', 'native': 'Diné bizaad, Dinékʼehǰí', 'icon': 'flag-icon-us' },
  'nb': { 'name': 'Norwegian Bokmål', 'code': 'nb', 'native': 'Norsk bokmål', 'icon': 'flag-icon-no' },
  'nd': { 'name': 'North Ndebele', 'code': 'nd', 'native': 'isiNdebele', 'icon': 'flag-icon-zw' },
  'ne': { 'name': 'Nepali', 'code': 'ne', 'native': 'नेपाली', 'icon': 'flag-icon-np' },
  'ng': { 'name': 'Ndonga', 'code': 'ng', 'native': 'Owambo', 'icon': 'flag-icon-ao' },
  'nn': { 'name': 'Norwegian Nynorsk', 'code': 'nn', 'native': 'Norsk nynorsk', 'icon': 'flag-icon-no' },
  'no': { 'name': 'Norwegian', 'code': 'no', 'native': 'Norsk', 'icon': 'flag-icon-no' },
  'ii': { 'name': 'Nuosu', 'code': 'ii', 'native': 'ꆈꌠ꒿ Nuosuhxop', 'icon': 'flag-icon-cn' },
  'nr': { 'name': 'South Ndebele', 'code': 'nr', 'native': 'isiNdebele', 'icon': 'flag-icon-za' },
  'oc': { 'name': 'Occitan', 'code': 'oc', 'native': 'Occitan', 'icon': 'flag-icon-es' },
  'oj': { 'name': 'Ojibwe', 'code': 'oj', 'native': 'ᐊᓂᔑᓈᐯᒧᐎᓐ', 'icon': 'flag-icon-ca' },
  'om': { 'name': 'Oromo', 'code': 'om', 'native': 'Afaan Oromoo', 'icon': 'flag-icon-et' },
  'or': { 'name': 'Oriya', 'code': 'or', 'native': 'ଓଡ଼ିଆ', 'icon': 'flag-icon-in' },
  'os': { 'name': 'Ossetian', 'code': 'os', 'native': 'ирон æвзаг', 'icon': 'flag-icon-ru' },
  'pa': { 'name': 'Panjabi, Punjabi', 'code': 'pa', 'native': 'ਪੰਜਾਬੀ, پنجابی‎', 'icon': 'flag-icon-in' },
  'pi': { 'name': 'Pāli', 'code': 'pi', 'native': 'पाऴि', 'icon': 'flag-icon-in' },
  'fa': { 'name': 'Persian', 'code': 'fa', 'native': 'فارسی', 'icon': 'flag-icon-ir' },
  'pl': { 'name': 'Polish', 'code': 'pl', 'native': 'polski', 'icon': 'flag-icon-pl' },
  'ps': { 'name': 'Pashto', 'code': 'ps', 'native': 'پښتو', 'icon': 'flag-icon-af' },
  'pt': { 'name': 'Portuguese', 'code': 'pt', 'native': 'Português', 'icon': 'flag-icon-pt' },
  'qu': { 'name': 'Quechua', 'code': 'qu', 'native': 'Runa Simi, Kichwa', 'icon': 'flag-icon-ar' },
  'rm': { 'name': 'Romansh', 'code': 'rm', 'native': 'rumantsch grischun', 'icon': 'flag-icon-ch' },
  'rn': { 'name': 'Kirundi', 'code': 'rn', 'native': 'kiRundi', 'icon': 'flag-icon-bi' },
  'ro': { 'name': 'Romanian', 'code': 'ro', 'native': 'română', 'icon': 'flag-icon-ro' },
  'ru': { 'name': 'Russian', 'code': 'ru', 'native': 'русский язык', 'icon': 'flag-icon-ru' },
  'sa': { 'name': 'Sanskrit', 'code': 'sa', 'native': 'संस्कृतम्', 'icon': 'flag-icon-in' },
  'sc': { 'name': 'Sardinian', 'code': 'sc', 'native': 'sardu', 'icon': 'flag-icon-it' },
  'sd': { 'name': 'Sindhi', 'code': 'sd', 'native': 'सिन्धी, سنڌي، سندھی‎', 'icon': 'flag-icon-pk' },
  'se': { 'name': 'Northern Sami', 'code': 'se', 'native': 'Davvisámegiella', 'icon': 'flag-icon-no' },
  'sm': { 'name': 'Samoan', 'code': 'sm', 'native': 'gagana faa Samoa', 'icon': 'flag-icon-ws' },
  'sg': { 'name': 'Sango', 'code': 'sg', 'native': 'yângâ tî sängö', 'icon': 'flag-icon-cf' },
  'sr': { 'name': 'Serbian', 'code': 'sr', 'native': 'српски језик', 'icon': 'flag-icon-rs' },
  'gd': { 'name': 'Gaelic', 'code': 'gd', 'native': 'Gàidhlig', 'icon': 'flag-icon-gb' },
  'sn': { 'name': 'Shona', 'code': 'sn', 'native': 'chiShona', 'icon': 'flag-icon-zw' },
  'si': { 'name': 'Sinhala', 'code': 'si', 'native': 'සිංහල', 'icon': 'flag-icon-lk' },
  'sk': { 'name': 'Slovak', 'code': 'sk', 'native': 'slovenčina', 'icon': 'flag-icon-sk' },
  'sl': { 'name': 'Slovene', 'code': 'sl', 'native': 'slovenščina', 'icon': 'flag-icon-si' },
  'so': { 'name': 'Somali', 'code': 'so', 'native': 'Soomaaliga, af Soomaali', 'icon': 'flag-icon-so' },
  'st': { 'name': 'Southern Sotho', 'code': 'st', 'native': 'Sesotho', 'icon': 'flag-icon-za' },
  'es': { 'name': 'Spanish', 'code': 'es', 'native': 'Español', 'icon': 'flag-icon-mx' },
  'su': { 'name': 'Sundanese', 'code': 'su', 'native': 'Basa Sunda', 'icon': 'flag-icon-id' },
  'sw': { 'name': 'Swahili', 'code': 'sw', 'native': 'Kiswahili', 'icon': 'flag-icon-tz' },
  'ss': { 'name': 'Swati', 'code': 'ss', 'native': 'SiSwati', 'icon': 'flag-icon-sz' },
  'sv': { 'name': 'Swedish', 'code': 'sv', 'native': 'svenska', 'icon': 'flag-icon-se' },
  'ta': { 'name': 'Tamil', 'code': 'ta', 'native': 'தமிழ்', 'icon': 'flag-icon-in' },
  'te': { 'name': 'Telugu', 'code': 'te', 'native': 'తెలుగు', 'icon': 'flag-icon-in' },
  'tg': { 'name': 'Tajik', 'code': 'tg', 'native': 'тоҷикӣ, toğikī, تاجیکی‎', 'icon': 'flag-icon-tj' },
  'th': { 'name': 'Thai', 'code': 'th', 'native': 'ไทย', 'icon': 'flag-icon-th' },
  'ti': { 'name': 'Tigrinya', 'code': 'ti', 'native': 'ትግርኛ', 'icon': 'flag-icon-er' },
  'bo': { 'name': 'Tibetan Standard, Tibetan, Central', 'code': 'bo', 'native': 'བོད་ཡིག', 'icon': 'flag-icon-cn' },
  'tk': { 'name': 'Turkmen', 'code': 'tk', 'native': 'Türkmen, Түркмен', 'icon': 'flag-icon-tm' },
  'tl': { 'name': 'Tagalog', 'code': 'tl', 'native': 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔', 'icon': 'flag-icon-ph' },
  'tn': { 'name': 'Tswana', 'code': 'tn', 'native': 'Setswana', 'icon': 'flag-icon-bw' },
  'to': { 'name': 'Tonga (Tonga Islands)', 'code': 'to', 'native': 'faka Tonga', 'icon': 'flag-icon-to' },
  'tr': { 'name': 'Turkish', 'code': 'tr', 'native': 'Türkçe', 'icon': 'flag-icon-tr' },
  'ts': { 'name': 'Tsonga', 'code': 'ts', 'native': 'Xitsonga', 'icon': 'flag-icon-mz' },
  'tt': { 'name': 'Tatar', 'code': 'tt', 'native': 'татарча, tatarça, تاتارچا‎', 'icon': 'flag-icon-ru' },
  'tw': { 'name': 'Twi', 'code': 'tw', 'native': 'Twi', 'icon': 'flag-icon-gh' },
  'ty': { 'name': 'Tahitian', 'code': 'ty', 'native': 'Reo Tahiti', 'icon': 'flag-icon-pf' },
  'ug': { 'name': 'Uighur', 'code': 'ug', 'native': 'ئۇيغۇرچە‎', 'icon': 'flag-icon-cn' },
  'uk': { 'name': 'Ukrainian', 'code': 'uk', 'native': 'українська', 'icon': 'flag-icon-ua' },
  'ur': { 'name': 'Urdu', 'code': 'ur', 'native': 'اردو', 'icon': 'flag-icon-pk' },
  'uz': { 'name': 'Uzbek', 'code': 'uz', 'native': 'zbek, Ўзбек, أۇزبېك‎', 'icon': 'flag-icon-uz' },
  've': { 'name': 'Venda', 'code': 've', 'native': 'Tshivenḓa', 'icon': 'flag-icon-za' },
  'vi': { 'name': 'Vietnamese', 'code': 'vi', 'native': 'Tiếng Việt', 'icon': 'flag-icon-vn' },
  'wa': { 'name': 'Walloon', 'code': 'wa', 'native': 'Walon', 'icon': 'flag-icon-be' },
  'cy': { 'name': 'Welsh', 'code': 'cy', 'native': 'Cymraeg', 'icon': 'flag-icon-gb' },
  'wo': { 'name': 'Wolof', 'code': 'wo', 'native': 'Wollof', 'icon': 'flag-icon-sn' },
  'fy': { 'name': 'Western Frisian', 'code': 'fy', 'native': 'Frysk', 'icon': 'flag-icon-nl' },
  'xh': { 'name': 'Xhosa', 'code': 'xh', 'native': 'isiXhosa', 'icon': 'flag-icon-za' },
  'yi': { 'name': 'Yiddish', 'code': 'yi', 'native': 'ייִדיש', 'icon': 'flag-icon-il' },
  'yo': { 'name': 'Yoruba', 'code': 'yo', 'native': 'Yorùbá', 'icon': 'flag-icon-bj' },
  'za': { 'name': 'Zhuang', 'code': 'za', 'native': 'Saɯ cueŋƅ, Saw cuengh', 'icon': 'flag-icon-cn' },
  'zz': { 'name': 'Test', 'code': 'zz', 'native': 'Test', 'icon': 'flag-icon-us' }
};
let languages = [];
Object.keys(isoLangs).forEach((key) => languages.push(isoLangs[key]));
languages.pop(); //REMOVE TEST LANGUAGE
languages = _.orderBy(languages, 'native').map(l => l.code);

function randomizer(array, qty) {
  let length = array.length;

  if (qty && qty > 1) {
    if (qty > length) return array;
    let result = [];
    let newArray = [...array];
    for (let i = 0; i < qty; i++) {
      length = newArray.length;
      const index = Math.floor(Math.random() * length);
      newArray.splice(index, 1);
      result.push(array[index]);
    }
    return result;
  } else {
    const index = Math.floor(Math.random() * length);
    return array[index];
  }
}

Meteor.methods({
  'fake-profiles': function () {

    let index;
    let result = [];
    //return faker;
    const network = randomizer(['facebook', 'twitter']);
    let profile = SocialAccounts.findOne({ network });
    for (index = 0; index < 15; index++) {
      // const fake=faker.Helpers.contextualCard();
      profile.active = true;
      //SET INFORMATION DATA
      profile.information = Object.assign({}, Schema.information, {
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar(),
        gender: randomizer(['male', 'female']),
        birthDate: moment().subtract(15 + Math.random() * 50, 'years').toDate(),
        country: randomizer(Countries),
        city: '',
        maritalStatus: '',
        forbiddenSubjects: [],
        sexualOrientation: '',
        likes: [],
        language: randomizer(languages),
        description: faker.lorem.words(30),
        categories: [],
        specialties: [],
        urls: []
      });

      profile.settings.type.brand = Boolean(Math.floor(Math.random() * 2));
      profile.settings.type.influencer = Boolean(Math.floor(Math.random() * 2));

      let getPrice = () => randomizer([Math.floor(Math.random() * 3000), '']);

      profile.pricing = Object.assign({}, Schema.pricing, {
        post: getPrice(),
        profilePicture: getPrice(),
        coverPhoto: getPrice(),
        noPostHour: getPrice(),
        noPostDay: getPrice(),
        share: getPrice(),
        partnership: getPrice(),
        ambassador: getPrice()
      });

      const tags = [
        'Cantantes',
        'Pop',
        'Rock',
        'Mexico',
        'Artistas',
        'Mujeres',
        'Éxitos',
        'Los 40',
        'Icons',
        'Favoritos',
        'IBOL',
        'Test'
      ];
      profile.grous = randomizer(tags, Math.random() * 10);
      profile.groups.push('Fake');

      let getRandomNumber = function (multiplier) {
        multiplier = multiplier || 1;
        return Math.floor(Math.random() * 1000 * multiplier);
      };
      profile.statistics = {
        retweets: getRandomNumber(),
        retweetsPerPost: getRandomNumber(Math.random()),
        favorites: getRandomNumber(),
        favoritesPerPost: getRandomNumber(Math.random()),
        comments: getRandomNumber(),
        commentsPerPost: getRandomNumber(Math.random()),
        likes: getRandomNumber(),
        likesPerPost: getRandomNumber(Math.random()),
        shares: getRandomNumber(),
        sharesPerPost: getRandomNumber(Math.random()),
        engagement: Math.random(),
        followers: getRandomNumber(100),
        following: getRandomNumber(100),
        profileLikes: getRandomNumber(),
        posts: getRandomNumber(),
        postsPerDay: getRandomNumber(Math.random())
      };

      delete profile._id;

      SocialAccounts.insert(profile);
      result.push(profile);
    }
    return result;
  },
});


