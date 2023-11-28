# `captchaOrgWideSettings` Submodule <a name="`captchaOrgWideSettings` Submodule" id="@cdktf/provider-okta.captchaOrgWideSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CaptchaOrgWideSettings <a name="CaptchaOrgWideSettings" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/captcha_org_wide_settings okta_captcha_org_wide_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer"></a>

```typescript
import { captchaOrgWideSettings } from '@cdktf/provider-okta'

new captchaOrgWideSettings.CaptchaOrgWideSettings(scope: Construct, id: string, config?: CaptchaOrgWideSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig">CaptchaOrgWideSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig">CaptchaOrgWideSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId">resetCaptchaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor">resetEnabledFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCaptchaId` <a name="resetCaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId"></a>

```typescript
public resetCaptchaId(): void
```

##### `resetEnabledFor` <a name="resetEnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor"></a>

```typescript
public resetEnabledFor(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CaptchaOrgWideSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct"></a>

```typescript
import { captchaOrgWideSettings } from '@cdktf/provider-okta'

captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement"></a>

```typescript
import { captchaOrgWideSettings } from '@cdktf/provider-okta'

captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource"></a>

```typescript
import { captchaOrgWideSettings } from '@cdktf/provider-okta'

captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport"></a>

```typescript
import { captchaOrgWideSettings } from '@cdktf/provider-okta'

captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CaptchaOrgWideSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CaptchaOrgWideSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CaptchaOrgWideSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/captcha_org_wide_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CaptchaOrgWideSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput">captchaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput">enabledForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId">captchaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor">enabledFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `captchaIdInput`<sup>Optional</sup> <a name="captchaIdInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput"></a>

```typescript
public readonly captchaIdInput: string;
```

- *Type:* string

---

##### `enabledForInput`<sup>Optional</sup> <a name="enabledForInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput"></a>

```typescript
public readonly enabledForInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `captchaId`<sup>Required</sup> <a name="captchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId"></a>

```typescript
public readonly captchaId: string;
```

- *Type:* string

---

##### `enabledFor`<sup>Required</sup> <a name="enabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor"></a>

```typescript
public readonly enabledFor: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CaptchaOrgWideSettingsConfig <a name="CaptchaOrgWideSettingsConfig" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.Initializer"></a>

```typescript
import { captchaOrgWideSettings } from '@cdktf/provider-okta'

const captchaOrgWideSettingsConfig: captchaOrgWideSettings.CaptchaOrgWideSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId">captchaId</a></code> | <code>string</code> | ID of the CAPTCHA. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor">enabledFor</a></code> | <code>string[]</code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `captchaId`<sup>Optional</sup> <a name="captchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId"></a>

```typescript
public readonly captchaId: string;
```

- *Type:* string

ID of the CAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `enabledFor`<sup>Optional</sup> <a name="enabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor"></a>

```typescript
public readonly enabledFor: string[];
```

- *Type:* string[]

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



