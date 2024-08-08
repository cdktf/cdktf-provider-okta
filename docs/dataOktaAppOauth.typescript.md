# `dataOktaAppOauth` Submodule <a name="`dataOktaAppOauth` Submodule" id="@cdktf/provider-okta.dataOktaAppOauth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAppOauth <a name="DataOktaAppOauth" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth okta_app_oauth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer"></a>

```typescript
import { dataOktaAppOauth } from '@cdktf/provider-okta'

new dataOktaAppOauth.DataOktaAppOauth(scope: Construct, id: string, config?: DataOktaAppOauthConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig">DataOktaAppOauthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig">DataOktaAppOauthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetActiveOnly">resetActiveOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetLabelPrefix">resetLabelPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetActiveOnly` <a name="resetActiveOnly" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetActiveOnly"></a>

```typescript
public resetActiveOnly(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetLabelPrefix` <a name="resetLabelPrefix" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetLabelPrefix"></a>

```typescript
public resetLabelPrefix(): void
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetSkipGroups"></a>

```typescript
public resetSkipGroups(): void
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.resetSkipUsers"></a>

```typescript
public resetSkipUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaAppOauth resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isConstruct"></a>

```typescript
import { dataOktaAppOauth } from '@cdktf/provider-okta'

dataOktaAppOauth.DataOktaAppOauth.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isTerraformElement"></a>

```typescript
import { dataOktaAppOauth } from '@cdktf/provider-okta'

dataOktaAppOauth.DataOktaAppOauth.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isTerraformDataSource"></a>

```typescript
import { dataOktaAppOauth } from '@cdktf/provider-okta'

dataOktaAppOauth.DataOktaAppOauth.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport"></a>

```typescript
import { dataOktaAppOauth } from '@cdktf/provider-okta'

dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOktaAppOauth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaAppOauth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaAppOauth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaAppOauth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.clientUri">clientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.grantTypes">grantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.hideIos">hideIos</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.hideWeb">hideWeb</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.links">links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.loginMode">loginMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.loginScopes">loginScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.loginUri">loginUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.logoUri">logoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.policyUri">policyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.redirectUris">redirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.responseTypes">responseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.wildcardRedirect">wildcardRedirect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.activeOnlyInput">activeOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.labelPrefixInput">labelPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipGroupsInput">skipGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipUsersInput">skipUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.activeOnly">activeOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.labelPrefix">labelPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.autoSubmitToolbar"></a>

```typescript
public readonly autoSubmitToolbar: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.clientUri"></a>

```typescript
public readonly clientUri: string;
```

- *Type:* string

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.grantTypes"></a>

```typescript
public readonly grantTypes: string[];
```

- *Type:* string[]

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.hideIos"></a>

```typescript
public readonly hideIos: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.hideWeb"></a>

```typescript
public readonly hideWeb: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.links"></a>

```typescript
public readonly links: string;
```

- *Type:* string

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.loginMode"></a>

```typescript
public readonly loginMode: string;
```

- *Type:* string

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.loginScopes"></a>

```typescript
public readonly loginScopes: string[];
```

- *Type:* string[]

---

##### `loginUri`<sup>Required</sup> <a name="loginUri" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.loginUri"></a>

```typescript
public readonly loginUri: string;
```

- *Type:* string

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.logoUri"></a>

```typescript
public readonly logoUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.policyUri"></a>

```typescript
public readonly policyUri: string;
```

- *Type:* string

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.postLogoutRedirectUris"></a>

```typescript
public readonly postLogoutRedirectUris: string[];
```

- *Type:* string[]

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.redirectUris"></a>

```typescript
public readonly redirectUris: string[];
```

- *Type:* string[]

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.responseTypes"></a>

```typescript
public readonly responseTypes: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `wildcardRedirect`<sup>Required</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.wildcardRedirect"></a>

```typescript
public readonly wildcardRedirect: string;
```

- *Type:* string

---

##### `activeOnlyInput`<sup>Optional</sup> <a name="activeOnlyInput" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.activeOnlyInput"></a>

```typescript
public readonly activeOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `labelPrefixInput`<sup>Optional</sup> <a name="labelPrefixInput" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.labelPrefixInput"></a>

```typescript
public readonly labelPrefixInput: string;
```

- *Type:* string

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipGroupsInput"></a>

```typescript
public readonly skipGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipUsersInput"></a>

```typescript
public readonly skipUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `activeOnly`<sup>Required</sup> <a name="activeOnly" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.activeOnly"></a>

```typescript
public readonly activeOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `labelPrefix`<sup>Required</sup> <a name="labelPrefix" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.labelPrefix"></a>

```typescript
public readonly labelPrefix: string;
```

- *Type:* string

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauth.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppOauthConfig <a name="DataOktaAppOauthConfig" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.Initializer"></a>

```typescript
import { dataOktaAppOauth } from '@cdktf/provider-okta'

const dataOktaAppOauthConfig: dataOktaAppOauth.DataOktaAppOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.activeOnly">activeOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Search only ACTIVE applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.id">id</a></code> | <code>string</code> | Id of application to retrieve, conflicts with label and label_prefix. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.label">label</a></code> | <code>string</code> | The label of the app to retrieve, conflicts with 				label_prefix and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.labelPrefix">labelPrefix</a></code> | <code>string</code> | Label prefix of the app to retrieve, conflicts with label and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.skipGroups">skipGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.skipUsers">skipUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `activeOnly`<sup>Optional</sup> <a name="activeOnly" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.activeOnly"></a>

```typescript
public readonly activeOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Search only ACTIVE applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#active_only DataOktaAppOauth#active_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Id of application to retrieve, conflicts with label and label_prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#id DataOktaAppOauth#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

The label of the app to retrieve, conflicts with 				label_prefix and id.

Label uses the ?q=<label> query parameter exposed by
				Okta's List Apps API. The API will search both name and label using that
				query. Therefore similarily named and labeled apps may be returned in the query
				and have the unitended result of associating the wrong app with this data
				source. See:
				https://developer.okta.com/docs/reference/api/apps/#list-applications

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#label DataOktaAppOauth#label}

---

##### `labelPrefix`<sup>Optional</sup> <a name="labelPrefix" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.labelPrefix"></a>

```typescript
public readonly labelPrefix: string;
```

- *Type:* string

Label prefix of the app to retrieve, conflicts with label and id.

This will tell the
				provider to do a starts with query as opposed to an equals query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#label_prefix DataOktaAppOauth#label_prefix}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.skipGroups"></a>

```typescript
public readonly skipGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#skip_groups DataOktaAppOauth#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.dataOktaAppOauth.DataOktaAppOauthConfig.property.skipUsers"></a>

```typescript
public readonly skipUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/data-sources/app_oauth#skip_users DataOktaAppOauth#skip_users}

---



