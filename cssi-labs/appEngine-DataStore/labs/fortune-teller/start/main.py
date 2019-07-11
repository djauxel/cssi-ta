#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import os
import random

#remember, you can get this by searching for jinja2 google app engine
the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

def get_fortune():
    fortune_list=[
        'A real patriot is the fellow who gets a parking ticket and rejoices that the system works', 
        'Your wisdom makes you superior to others',
        'The program \'fortune\' is currently not installed. You can install it by typing: sudo apt-get install fortune-mod',
        'Three can keep a secret, if you get rid of two',
        'Blessed are the children for they shall inherit the national debt',
        'No snowflake in an avalanche ever feels responsible',
        'Fail',
        'Enjoy yourself while you can',
        'About time I got out of that cookie',
        'You will be rewarded for being a good listener']
    return fortune_list[random.randint(0, 9)]

class FortuneHandler(webapp2.RequestHandler):
    def get(self):
        starter_template = the_jinja_env.get_template('templates/fortune-start.html')
        self.response.write(starter_template.render())
        
    def post(self):
        rand_fortune = get_fortune()
        astro_sign = self.request.get('user_astrological_sign')
        my_dict = {
            'the_fortune': rand_fortune, 
            'the_astro_sign': astro_sign
            }
        results_template = the_jinja_env.get_template('templates/fortune-results.html')
        self.response.write(results_template.render(my_dict))  # the response

# Route mapping
app = webapp2.WSGIApplication([
    ('/', FortuneHandler)
], debug=True)
