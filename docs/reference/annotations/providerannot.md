# Provider Annotations

[[toc]]


## Overview
Framely supports the full stack component. Frames defined on the [provider](../../guide/glossary.md#provider), which are storage enabled, can be persisted to tables in the database, and slots in each frame are inserted as columns into the corresponding table. With provider annotations, you can specify how frames are stored in PostgreSQL and how the operation team can access this stored data via [back office](../../guide/glossary.md#backoffice).

![frame-table](/images/annotation/providerannotation/frame-table.png)

Provider annotations include [storage annotations](./overview.md#storage-annotations) and [back office annotations](./overview.md#backoffice-annotations).
1. Storage annotations define the database schema needed by the backend component, which can then be used to create a compatible database to serve the required backend.
2. Back office annotations are used to define the user experience of the back office for the backend.

Unlike dialog annotation, provider annotations are only helpful for Framely-hosted providers. On a Framely-hosted provider, when triggering the **Deploy** button, the platform will update the table structure in the corresponding hosted database.


## Features
- Support storage annotations
  - Create tables in database
  - Set a default value of a column
  - Set not-null constraints
  - Set unique constraints
- Support back office annotations
  - Upload a picture to a cell and it will be stored as a URL
  - Select a value from a dropdown list

  
Before starting, turn on **Storage Enabled** in **Frames** field to enable storing frames as tables in the database. There are two levels of provider annotations: slot level and frame level.
- At a slot level, you can configure the column properties and back office annotations in the **Schema**  - **Slots** field.
- At a frame level, you can configure table constraints in the **Annotation** field.

![provider-annotation](/images/annotation/providerannotation/provider-annotation.png)


## Type
Type is a slot annotation. When you add a slot to a frame, you need to choose a type.

- If the type is *kotlin.String* or customized entity(e.g. like *City* in the below picture), you need to specify the data type of the column. Supported formats are `char(n)`, `varchar(n)`, `text`. Replace "n" with a number between 1 and 10485760, e.g. `char(16)`.

![type](/images/annotation/providerannotation/type.png)

- If not, when you deploy the provider, we will convert the type to the corresponding column database type automatically.



## Default Value
Default value is a slot annotation. You can use a constant or an expression as a default value. When there is no value specified in the column, the column will be filled with its default value.

![default-value](/images/annotation/providerannotation/default-value.png)

For example, if the type of slot is *java.time.LocalDate*, you can set its default value as `'2022-6-15'` or `now()::date`. For details about default value in official documentation, click [here](https://www.postgresql.org/docs/current/ddl-default.html).

## Allow Null
::: right
![allow-null](/images/annotation/providerannotation/allow-null.png)
:::

Allow null is a slot annotation that is turned on by default. Allow null is a column constraint and it means the column can be null. If you turn off allow null, it indicates that the column can't be null. To learn more about it, see [Not-Null Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html#id-1.5.4.6.6).

## Unique
Unique is a frame annotation. If there is only one slot in a group of unique constraints, unique constraints ensure the data contained in the corresponding column is unique among all the rows in the table. If not, unique constraints make sure that the combination of values in the indicated columns is unique across the table.

To add one group of unique constraints, in the **Annotation** field, click **Add** and select unique keys. If there are 3 columns which should be unique individually, be sure to add 3 groups of unique constraints.

![unique](/images/annotation/providerannotation/unique.png)

To learn more about it, see [Unique Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS).
::: tip Tips
For now, among table constraints, we only support unique constraints. If you need more table constraints, please let us know.
:::

## URL
When sending messages to users, compared to plain text, rich cards can carry more information, like pictures, titles, descriptions, etc. To add a picture to a rich card, you need the picture URL.

[Back office](../../guide/glossary.md#backoffice) supports uploading pictures and storing them as URLs. You can upload pictures in back office and get the picture URLs using PostgreSQL Function.

::: thumbnail
![process](/images/annotation/providerannotation/process.png)
Process of Getting Picuture URL
:::

::: right
![url](/images/annotation/providerannotation/url.png)
:::

To enable URL, select *kotlin.String* when choosing [Type](#type) and set data type as `text`. Once done, there will be a switch: URL. Turn on URL so that you can upload pictures in that column.

For example, there is a slot called *catPicture* in a storage-enabled frame, and URL is enabled in this slot. Here are the steps to uploading pictures in back office.

1. Go to back office, find the corresponding table, click **Create**.
2. Upload a picture in the column called *catPiture* and fill another column called catName.
3. Back to the page displaying the table, you can view the picture that you just uploaded.

![back-office](/images/annotation/providerannotation/back-office.png)

## Input Type
There are two input types: text and dropdown. By default, input type is text which means [operators](../../guide/glossary.md#operator-business) can type raw input directly. If you want to make it easy for operators to input legit and compatible value, you can switch input type to dropdown.

![dropdown](/images/annotation/providerannotation/dropdown.png)

Dropdown List is a JSON array, which should return a list of values that are at least legit and potentially compatible so that operator can pick the correct value. The content of dropdown list includes two columns (id, name): where name will be displayed, and id will be assigned as value.

For example, if a column is used to store a city, its dropdown List is like:

```json
[ { id: 'NY', name: 'NewYork' },
  { id: 'LA', name: 'Los Angeles' },]
```