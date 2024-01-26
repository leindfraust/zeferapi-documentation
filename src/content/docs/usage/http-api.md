---
title: HTTP API
description: A guide how to access ZeFer API through HTTP API.
---

The ZeFer blog posts can currently only be accessed through the HTTP API, which requires Bearer Token Authorization. Before proceeding, ensure that you have created an account on ZeFer. The API is hosted on [render.com](https://render.com/).

## Get API Key

To get your API key, create an account or log in through [here](https://zefer.vercel.app/api/auth/signin?callbackUrl=https%3A%2F%2Fzefer.vercel.app%2F). Once you have successfully created an account, navigate to the [account page](https://zefer.vercel.app/settings/account) on the settings. From here, you can generate your API key and also manage them.

## Usage

To get your blog posts on ZeFer, copy and paste your API key on the Authorization Bearer Token when requesting. Here are few examples on how to do it on various programming languages.

### JavaScript

```
const url = 'https://zefer-api.onrender.com/posts';

const blogPosts = fetch(url, {
  headers: {
    'Authorization': `Bearer ${process.env.ZEFER_API_KEY}`
  }
});

const response = await blogPosts.json();
```

### Python

```
import requests

url = 'https://zefer-api.onrender.com/posts'
headers = {
    'Authorization': f'Bearer {os.environ["ZEFER_API_KEY"]}'
}

response = requests.get(url, headers=headers).json()
```

### cURL

```
curl -X GET \
  -H "Authorization: Bearer $ZEFER_API_KEY" \
  https://zefer-api.onrender.com/posts
```

### PHP

```
<?php

$url = 'https://zefer-api.onrender.com/posts';
$apiKey = $_ENV['ZEFER_API_KEY'];

$options = [
    'http' => [
        'header' => "Authorization: Bearer $apiKey"
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

$json = json_decode($response);

?>
```
