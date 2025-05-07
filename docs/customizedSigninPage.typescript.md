# `customizedSigninPage` Submodule <a name="`customizedSigninPage` Submodule" id="@cdktf/provider-okta.customizedSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomizedSigninPage <a name="CustomizedSigninPage" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page okta_customized_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

new customizedSigninPage.CustomizedSigninPage(scope: Construct, id: string, config: CustomizedSigninPageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig">CustomizedSigninPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig">CustomizedSigninPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting">putContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations">putWidgetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting">resetContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations">resetWidgetCustomizations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentSecurityPolicySetting` <a name="putContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting"></a>

```typescript
public putContentSecurityPolicySetting(value: CustomizedSigninPageContentSecurityPolicySetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putContentSecurityPolicySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---

##### `putWidgetCustomizations` <a name="putWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations"></a>

```typescript
public putWidgetCustomizations(value: CustomizedSigninPageWidgetCustomizations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.putWidgetCustomizations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

---

##### `resetContentSecurityPolicySetting` <a name="resetContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetContentSecurityPolicySetting"></a>

```typescript
public resetContentSecurityPolicySetting(): void
```

##### `resetWidgetCustomizations` <a name="resetWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.resetWidgetCustomizations"></a>

```typescript
public resetWidgetCustomizations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

customizedSigninPage.CustomizedSigninPage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

customizedSigninPage.CustomizedSigninPage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

customizedSigninPage.CustomizedSigninPage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

customizedSigninPage.CustomizedSigninPage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomizedSigninPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomizedSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomizedSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting">contentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations">widgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput">brandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput">contentSecurityPolicySettingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput">pageContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput">widgetCustomizationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput">widgetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId">brandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent">pageContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion">widgetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentSecurityPolicySetting`<sup>Required</sup> <a name="contentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySetting"></a>

```typescript
public readonly contentSecurityPolicySetting: CustomizedSigninPageContentSecurityPolicySettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference">CustomizedSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `widgetCustomizations`<sup>Required</sup> <a name="widgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizations"></a>

```typescript
public readonly widgetCustomizations: CustomizedSigninPageWidgetCustomizationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference">CustomizedSigninPageWidgetCustomizationsOutputReference</a>

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandIdInput"></a>

```typescript
public readonly brandIdInput: string;
```

- *Type:* string

---

##### `contentSecurityPolicySettingInput`<sup>Optional</sup> <a name="contentSecurityPolicySettingInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.contentSecurityPolicySettingInput"></a>

```typescript
public readonly contentSecurityPolicySettingInput: IResolvable | CustomizedSigninPageContentSecurityPolicySetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---

##### `pageContentInput`<sup>Optional</sup> <a name="pageContentInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContentInput"></a>

```typescript
public readonly pageContentInput: string;
```

- *Type:* string

---

##### `widgetCustomizationsInput`<sup>Optional</sup> <a name="widgetCustomizationsInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetCustomizationsInput"></a>

```typescript
public readonly widgetCustomizationsInput: IResolvable | CustomizedSigninPageWidgetCustomizations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

---

##### `widgetVersionInput`<sup>Optional</sup> <a name="widgetVersionInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersionInput"></a>

```typescript
public readonly widgetVersionInput: string;
```

- *Type:* string

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

---

##### `pageContent`<sup>Required</sup> <a name="pageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.pageContent"></a>

```typescript
public readonly pageContent: string;
```

- *Type:* string

---

##### `widgetVersion`<sup>Required</sup> <a name="widgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.widgetVersion"></a>

```typescript
public readonly widgetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomizedSigninPageConfig <a name="CustomizedSigninPageConfig" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.Initializer"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

const customizedSigninPageConfig: customizedSigninPage.CustomizedSigninPageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId">brandId</a></code> | <code>string</code> | brand id of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent">pageContent</a></code> | <code>string</code> | page content of the preview signin page. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion">widgetVersion</a></code> | <code>string</code> | widget version specified as a Semver. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting">contentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | content_security_policy_setting block. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations">widgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | widget_customizations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.brandId"></a>

```typescript
public readonly brandId: string;
```

- *Type:* string

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}

---

##### `pageContent`<sup>Required</sup> <a name="pageContent" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.pageContent"></a>

```typescript
public readonly pageContent: string;
```

- *Type:* string

page content of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}

---

##### `widgetVersion`<sup>Required</sup> <a name="widgetVersion" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetVersion"></a>

```typescript
public readonly widgetVersion: string;
```

- *Type:* string

widget version specified as a Semver.

The following are currently supported
			*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
			2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
			3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
			5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
			6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}

---

##### `contentSecurityPolicySetting`<sup>Optional</sup> <a name="contentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.contentSecurityPolicySetting"></a>

```typescript
public readonly contentSecurityPolicySetting: CustomizedSigninPageContentSecurityPolicySetting;
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

content_security_policy_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}

---

##### `widgetCustomizations`<sup>Optional</sup> <a name="widgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageConfig.property.widgetCustomizations"></a>

```typescript
public readonly widgetCustomizations: CustomizedSigninPageWidgetCustomizations;
```

- *Type:* <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

widget_customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_customizations CustomizedSigninPage#widget_customizations}

---

### CustomizedSigninPageContentSecurityPolicySetting <a name="CustomizedSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.Initializer"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

const customizedSigninPageContentSecurityPolicySetting: customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode">mode</a></code> | <code>string</code> | enforced or report_only. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri">reportUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList">srcList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

enforced or report_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}

---

##### `reportUri`<sup>Optional</sup> <a name="reportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.reportUri"></a>

```typescript
public readonly reportUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}.

---

##### `srcList`<sup>Optional</sup> <a name="srcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting.property.srcList"></a>

```typescript
public readonly srcList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}.

---

### CustomizedSigninPageWidgetCustomizations <a name="CustomizedSigninPageWidgetCustomizations" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.Initializer"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

const customizedSigninPageWidgetCustomizations: customizedSigninPage.CustomizedSigninPageWidgetCustomizations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration">widgetGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel">authenticatorPageCustomLinkLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl">authenticatorPageCustomLinkUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel">classicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label">customLink1Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url">customLink1Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label">customLink2Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url">customLink2Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel">forgotPasswordLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl">forgotPasswordUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel">helpLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl">helpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip">passwordInfoTip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel">passwordLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle">showPasswordVisibilityToggle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier">showUserIdentifier</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel">signInLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel">unlockAccountLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl">unlockAccountUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip">usernameInfoTip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel">usernameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}. |

---

##### `widgetGeneration`<sup>Required</sup> <a name="widgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.widgetGeneration"></a>

```typescript
public readonly widgetGeneration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}.

---

##### `authenticatorPageCustomLinkLabel`<sup>Optional</sup> <a name="authenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkLabel"></a>

```typescript
public readonly authenticatorPageCustomLinkLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}.

---

##### `authenticatorPageCustomLinkUrl`<sup>Optional</sup> <a name="authenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.authenticatorPageCustomLinkUrl"></a>

```typescript
public readonly authenticatorPageCustomLinkUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}.

---

##### `classicRecoveryFlowEmailOrUsernameLabel`<sup>Optional</sup> <a name="classicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```typescript
public readonly classicRecoveryFlowEmailOrUsernameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}.

---

##### `customLink1Label`<sup>Optional</sup> <a name="customLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Label"></a>

```typescript
public readonly customLink1Label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}.

---

##### `customLink1Url`<sup>Optional</sup> <a name="customLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink1Url"></a>

```typescript
public readonly customLink1Url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}.

---

##### `customLink2Label`<sup>Optional</sup> <a name="customLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Label"></a>

```typescript
public readonly customLink2Label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}.

---

##### `customLink2Url`<sup>Optional</sup> <a name="customLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.customLink2Url"></a>

```typescript
public readonly customLink2Url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}.

---

##### `forgotPasswordLabel`<sup>Optional</sup> <a name="forgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordLabel"></a>

```typescript
public readonly forgotPasswordLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}.

---

##### `forgotPasswordUrl`<sup>Optional</sup> <a name="forgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.forgotPasswordUrl"></a>

```typescript
public readonly forgotPasswordUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}.

---

##### `helpLabel`<sup>Optional</sup> <a name="helpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpLabel"></a>

```typescript
public readonly helpLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}.

---

##### `helpUrl`<sup>Optional</sup> <a name="helpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.helpUrl"></a>

```typescript
public readonly helpUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}.

---

##### `passwordInfoTip`<sup>Optional</sup> <a name="passwordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordInfoTip"></a>

```typescript
public readonly passwordInfoTip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}.

---

##### `passwordLabel`<sup>Optional</sup> <a name="passwordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.passwordLabel"></a>

```typescript
public readonly passwordLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}.

---

##### `showPasswordVisibilityToggle`<sup>Optional</sup> <a name="showPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showPasswordVisibilityToggle"></a>

```typescript
public readonly showPasswordVisibilityToggle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}.

---

##### `showUserIdentifier`<sup>Optional</sup> <a name="showUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.showUserIdentifier"></a>

```typescript
public readonly showUserIdentifier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}.

---

##### `signInLabel`<sup>Optional</sup> <a name="signInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.signInLabel"></a>

```typescript
public readonly signInLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}.

---

##### `unlockAccountLabel`<sup>Optional</sup> <a name="unlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountLabel"></a>

```typescript
public readonly unlockAccountLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}.

---

##### `unlockAccountUrl`<sup>Optional</sup> <a name="unlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.unlockAccountUrl"></a>

```typescript
public readonly unlockAccountUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}.

---

##### `usernameInfoTip`<sup>Optional</sup> <a name="usernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameInfoTip"></a>

```typescript
public readonly usernameInfoTip: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}.

---

##### `usernameLabel`<sup>Optional</sup> <a name="usernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations.property.usernameLabel"></a>

```typescript
public readonly usernameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomizedSigninPageContentSecurityPolicySettingOutputReference <a name="CustomizedSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

new customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri">resetReportUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList">resetSrcList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetReportUri` <a name="resetReportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetReportUri"></a>

```typescript
public resetReportUri(): void
```

##### `resetSrcList` <a name="resetSrcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.resetSrcList"></a>

```typescript
public resetSrcList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput">reportUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput">srcListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">reportUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList">srcList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `reportUriInput`<sup>Optional</sup> <a name="reportUriInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUriInput"></a>

```typescript
public readonly reportUriInput: string;
```

- *Type:* string

---

##### `srcListInput`<sup>Optional</sup> <a name="srcListInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcListInput"></a>

```typescript
public readonly srcListInput: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `reportUri`<sup>Required</sup> <a name="reportUri" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```typescript
public readonly reportUri: string;
```

- *Type:* string

---

##### `srcList`<sup>Required</sup> <a name="srcList" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```typescript
public readonly srcList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomizedSigninPageContentSecurityPolicySetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageContentSecurityPolicySetting">CustomizedSigninPageContentSecurityPolicySetting</a>

---


### CustomizedSigninPageWidgetCustomizationsOutputReference <a name="CustomizedSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```typescript
import { customizedSigninPage } from '@cdktf/provider-okta'

new customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel">resetAuthenticatorPageCustomLinkLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl">resetAuthenticatorPageCustomLinkUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel">resetClassicRecoveryFlowEmailOrUsernameLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label">resetCustomLink1Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url">resetCustomLink1Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label">resetCustomLink2Label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url">resetCustomLink2Url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel">resetForgotPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl">resetForgotPasswordUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel">resetHelpLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl">resetHelpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip">resetPasswordInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel">resetPasswordLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle">resetShowPasswordVisibilityToggle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier">resetShowUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel">resetSignInLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel">resetUnlockAccountLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl">resetUnlockAccountUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip">resetUsernameInfoTip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel">resetUsernameLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticatorPageCustomLinkLabel` <a name="resetAuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkLabel"></a>

```typescript
public resetAuthenticatorPageCustomLinkLabel(): void
```

##### `resetAuthenticatorPageCustomLinkUrl` <a name="resetAuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetAuthenticatorPageCustomLinkUrl"></a>

```typescript
public resetAuthenticatorPageCustomLinkUrl(): void
```

##### `resetClassicRecoveryFlowEmailOrUsernameLabel` <a name="resetClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetClassicRecoveryFlowEmailOrUsernameLabel"></a>

```typescript
public resetClassicRecoveryFlowEmailOrUsernameLabel(): void
```

##### `resetCustomLink1Label` <a name="resetCustomLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Label"></a>

```typescript
public resetCustomLink1Label(): void
```

##### `resetCustomLink1Url` <a name="resetCustomLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink1Url"></a>

```typescript
public resetCustomLink1Url(): void
```

##### `resetCustomLink2Label` <a name="resetCustomLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Label"></a>

```typescript
public resetCustomLink2Label(): void
```

##### `resetCustomLink2Url` <a name="resetCustomLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetCustomLink2Url"></a>

```typescript
public resetCustomLink2Url(): void
```

##### `resetForgotPasswordLabel` <a name="resetForgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordLabel"></a>

```typescript
public resetForgotPasswordLabel(): void
```

##### `resetForgotPasswordUrl` <a name="resetForgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetForgotPasswordUrl"></a>

```typescript
public resetForgotPasswordUrl(): void
```

##### `resetHelpLabel` <a name="resetHelpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpLabel"></a>

```typescript
public resetHelpLabel(): void
```

##### `resetHelpUrl` <a name="resetHelpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetHelpUrl"></a>

```typescript
public resetHelpUrl(): void
```

##### `resetPasswordInfoTip` <a name="resetPasswordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordInfoTip"></a>

```typescript
public resetPasswordInfoTip(): void
```

##### `resetPasswordLabel` <a name="resetPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetPasswordLabel"></a>

```typescript
public resetPasswordLabel(): void
```

##### `resetShowPasswordVisibilityToggle` <a name="resetShowPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowPasswordVisibilityToggle"></a>

```typescript
public resetShowPasswordVisibilityToggle(): void
```

##### `resetShowUserIdentifier` <a name="resetShowUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetShowUserIdentifier"></a>

```typescript
public resetShowUserIdentifier(): void
```

##### `resetSignInLabel` <a name="resetSignInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetSignInLabel"></a>

```typescript
public resetSignInLabel(): void
```

##### `resetUnlockAccountLabel` <a name="resetUnlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountLabel"></a>

```typescript
public resetUnlockAccountLabel(): void
```

##### `resetUnlockAccountUrl` <a name="resetUnlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUnlockAccountUrl"></a>

```typescript
public resetUnlockAccountUrl(): void
```

##### `resetUsernameInfoTip` <a name="resetUsernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameInfoTip"></a>

```typescript
public resetUsernameInfoTip(): void
```

##### `resetUsernameLabel` <a name="resetUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.resetUsernameLabel"></a>

```typescript
public resetUsernameLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput">authenticatorPageCustomLinkLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput">authenticatorPageCustomLinkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput">classicRecoveryFlowEmailOrUsernameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput">customLink1LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput">customLink1UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput">customLink2LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput">customLink2UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput">forgotPasswordLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput">forgotPasswordUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput">helpLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput">helpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput">passwordInfoTipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput">passwordLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput">showPasswordVisibilityToggleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput">showUserIdentifierInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput">signInLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput">unlockAccountLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput">unlockAccountUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput">usernameInfoTipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput">usernameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput">widgetGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">authenticatorPageCustomLinkLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">authenticatorPageCustomLinkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">classicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">customLink1Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">customLink1Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">customLink2Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">customLink2Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">forgotPasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">forgotPasswordUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel">helpLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl">helpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">passwordInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">passwordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">showPasswordVisibilityToggle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">showUserIdentifier</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel">signInLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">unlockAccountLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">unlockAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">usernameInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">usernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">widgetGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticatorPageCustomLinkLabelInput`<sup>Optional</sup> <a name="authenticatorPageCustomLinkLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabelInput"></a>

```typescript
public readonly authenticatorPageCustomLinkLabelInput: string;
```

- *Type:* string

---

##### `authenticatorPageCustomLinkUrlInput`<sup>Optional</sup> <a name="authenticatorPageCustomLinkUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrlInput"></a>

```typescript
public readonly authenticatorPageCustomLinkUrlInput: string;
```

- *Type:* string

---

##### `classicRecoveryFlowEmailOrUsernameLabelInput`<sup>Optional</sup> <a name="classicRecoveryFlowEmailOrUsernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabelInput"></a>

```typescript
public readonly classicRecoveryFlowEmailOrUsernameLabelInput: string;
```

- *Type:* string

---

##### `customLink1LabelInput`<sup>Optional</sup> <a name="customLink1LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1LabelInput"></a>

```typescript
public readonly customLink1LabelInput: string;
```

- *Type:* string

---

##### `customLink1UrlInput`<sup>Optional</sup> <a name="customLink1UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1UrlInput"></a>

```typescript
public readonly customLink1UrlInput: string;
```

- *Type:* string

---

##### `customLink2LabelInput`<sup>Optional</sup> <a name="customLink2LabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2LabelInput"></a>

```typescript
public readonly customLink2LabelInput: string;
```

- *Type:* string

---

##### `customLink2UrlInput`<sup>Optional</sup> <a name="customLink2UrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2UrlInput"></a>

```typescript
public readonly customLink2UrlInput: string;
```

- *Type:* string

---

##### `forgotPasswordLabelInput`<sup>Optional</sup> <a name="forgotPasswordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabelInput"></a>

```typescript
public readonly forgotPasswordLabelInput: string;
```

- *Type:* string

---

##### `forgotPasswordUrlInput`<sup>Optional</sup> <a name="forgotPasswordUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrlInput"></a>

```typescript
public readonly forgotPasswordUrlInput: string;
```

- *Type:* string

---

##### `helpLabelInput`<sup>Optional</sup> <a name="helpLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabelInput"></a>

```typescript
public readonly helpLabelInput: string;
```

- *Type:* string

---

##### `helpUrlInput`<sup>Optional</sup> <a name="helpUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrlInput"></a>

```typescript
public readonly helpUrlInput: string;
```

- *Type:* string

---

##### `passwordInfoTipInput`<sup>Optional</sup> <a name="passwordInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTipInput"></a>

```typescript
public readonly passwordInfoTipInput: string;
```

- *Type:* string

---

##### `passwordLabelInput`<sup>Optional</sup> <a name="passwordLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabelInput"></a>

```typescript
public readonly passwordLabelInput: string;
```

- *Type:* string

---

##### `showPasswordVisibilityToggleInput`<sup>Optional</sup> <a name="showPasswordVisibilityToggleInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggleInput"></a>

```typescript
public readonly showPasswordVisibilityToggleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `showUserIdentifierInput`<sup>Optional</sup> <a name="showUserIdentifierInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifierInput"></a>

```typescript
public readonly showUserIdentifierInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `signInLabelInput`<sup>Optional</sup> <a name="signInLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabelInput"></a>

```typescript
public readonly signInLabelInput: string;
```

- *Type:* string

---

##### `unlockAccountLabelInput`<sup>Optional</sup> <a name="unlockAccountLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabelInput"></a>

```typescript
public readonly unlockAccountLabelInput: string;
```

- *Type:* string

---

##### `unlockAccountUrlInput`<sup>Optional</sup> <a name="unlockAccountUrlInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrlInput"></a>

```typescript
public readonly unlockAccountUrlInput: string;
```

- *Type:* string

---

##### `usernameInfoTipInput`<sup>Optional</sup> <a name="usernameInfoTipInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTipInput"></a>

```typescript
public readonly usernameInfoTipInput: string;
```

- *Type:* string

---

##### `usernameLabelInput`<sup>Optional</sup> <a name="usernameLabelInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabelInput"></a>

```typescript
public readonly usernameLabelInput: string;
```

- *Type:* string

---

##### `widgetGenerationInput`<sup>Optional</sup> <a name="widgetGenerationInput" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGenerationInput"></a>

```typescript
public readonly widgetGenerationInput: string;
```

- *Type:* string

---

##### `authenticatorPageCustomLinkLabel`<sup>Required</sup> <a name="authenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```typescript
public readonly authenticatorPageCustomLinkLabel: string;
```

- *Type:* string

---

##### `authenticatorPageCustomLinkUrl`<sup>Required</sup> <a name="authenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```typescript
public readonly authenticatorPageCustomLinkUrl: string;
```

- *Type:* string

---

##### `classicRecoveryFlowEmailOrUsernameLabel`<sup>Required</sup> <a name="classicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```typescript
public readonly classicRecoveryFlowEmailOrUsernameLabel: string;
```

- *Type:* string

---

##### `customLink1Label`<sup>Required</sup> <a name="customLink1Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```typescript
public readonly customLink1Label: string;
```

- *Type:* string

---

##### `customLink1Url`<sup>Required</sup> <a name="customLink1Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```typescript
public readonly customLink1Url: string;
```

- *Type:* string

---

##### `customLink2Label`<sup>Required</sup> <a name="customLink2Label" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```typescript
public readonly customLink2Label: string;
```

- *Type:* string

---

##### `customLink2Url`<sup>Required</sup> <a name="customLink2Url" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```typescript
public readonly customLink2Url: string;
```

- *Type:* string

---

##### `forgotPasswordLabel`<sup>Required</sup> <a name="forgotPasswordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```typescript
public readonly forgotPasswordLabel: string;
```

- *Type:* string

---

##### `forgotPasswordUrl`<sup>Required</sup> <a name="forgotPasswordUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```typescript
public readonly forgotPasswordUrl: string;
```

- *Type:* string

---

##### `helpLabel`<sup>Required</sup> <a name="helpLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```typescript
public readonly helpLabel: string;
```

- *Type:* string

---

##### `helpUrl`<sup>Required</sup> <a name="helpUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```typescript
public readonly helpUrl: string;
```

- *Type:* string

---

##### `passwordInfoTip`<sup>Required</sup> <a name="passwordInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```typescript
public readonly passwordInfoTip: string;
```

- *Type:* string

---

##### `passwordLabel`<sup>Required</sup> <a name="passwordLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```typescript
public readonly passwordLabel: string;
```

- *Type:* string

---

##### `showPasswordVisibilityToggle`<sup>Required</sup> <a name="showPasswordVisibilityToggle" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```typescript
public readonly showPasswordVisibilityToggle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `showUserIdentifier`<sup>Required</sup> <a name="showUserIdentifier" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```typescript
public readonly showUserIdentifier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `signInLabel`<sup>Required</sup> <a name="signInLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```typescript
public readonly signInLabel: string;
```

- *Type:* string

---

##### `unlockAccountLabel`<sup>Required</sup> <a name="unlockAccountLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```typescript
public readonly unlockAccountLabel: string;
```

- *Type:* string

---

##### `unlockAccountUrl`<sup>Required</sup> <a name="unlockAccountUrl" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```typescript
public readonly unlockAccountUrl: string;
```

- *Type:* string

---

##### `usernameInfoTip`<sup>Required</sup> <a name="usernameInfoTip" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```typescript
public readonly usernameInfoTip: string;
```

- *Type:* string

---

##### `usernameLabel`<sup>Required</sup> <a name="usernameLabel" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```typescript
public readonly usernameLabel: string;
```

- *Type:* string

---

##### `widgetGeneration`<sup>Required</sup> <a name="widgetGeneration" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```typescript
public readonly widgetGeneration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomizedSigninPageWidgetCustomizations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.customizedSigninPage.CustomizedSigninPageWidgetCustomizations">CustomizedSigninPageWidgetCustomizations</a>

---



