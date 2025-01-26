# `appOauthRedirectUri` Submodule <a name="`appOauthRedirectUri` Submodule" id="@cdktf/provider-okta.appOauthRedirectUri"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauthRedirectUri <a name="AppOauthRedirectUri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_redirect_uri okta_app_oauth_redirect_uri}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer"></a>

```typescript
import { appOauthRedirectUri } from '@cdktf/provider-okta'

new appOauthRedirectUri.AppOauthRedirectUri(scope: Construct, id: string, config: AppOauthRedirectUriConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig">AppOauthRedirectUriConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig">AppOauthRedirectUriConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppOauthRedirectUri resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isConstruct"></a>

```typescript
import { appOauthRedirectUri } from '@cdktf/provider-okta'

appOauthRedirectUri.AppOauthRedirectUri.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement"></a>

```typescript
import { appOauthRedirectUri } from '@cdktf/provider-okta'

appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource"></a>

```typescript
import { appOauthRedirectUri } from '@cdktf/provider-okta'

appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport"></a>

```typescript
import { appOauthRedirectUri } from '@cdktf/provider-okta'

appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppOauthRedirectUri resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppOauthRedirectUri to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppOauthRedirectUri that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_redirect_uri#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppOauthRedirectUri to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthRedirectUriConfig <a name="AppOauthRedirectUriConfig" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.Initializer"></a>

```typescript
import { appOauthRedirectUri } from '@cdktf/provider-okta'

const appOauthRedirectUriConfig: appOauthRedirectUri.AppOauthRedirectUriConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.appId">appId</a></code> | <code>string</code> | OAuth application ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.uri">uri</a></code> | <code>string</code> | Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_redirect_uri#id AppOauthRedirectUri#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

OAuth application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_redirect_uri#app_id AppOauthRedirectUri#app_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_redirect_uri#uri AppOauthRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/resources/app_oauth_redirect_uri#id AppOauthRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



