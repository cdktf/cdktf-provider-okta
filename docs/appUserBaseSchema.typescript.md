# `appUserBaseSchema` Submodule <a name="`appUserBaseSchema` Submodule" id="@cdktf/provider-okta.appUserBaseSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserBaseSchema <a name="AppUserBaseSchema" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema okta_app_user_base_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer"></a>

```typescript
import { appUserBaseSchema } from '@cdktf/provider-okta'

new appUserBaseSchema.AppUserBaseSchema(scope: Construct, id: string, config: AppUserBaseSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig">AppUserBaseSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig">AppUserBaseSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetMaster">resetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetUserType">resetUserType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaster` <a name="resetMaster" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetMaster"></a>

```typescript
public resetMaster(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetUserType` <a name="resetUserType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.resetUserType"></a>

```typescript
public resetUserType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isConstruct"></a>

```typescript
import { appUserBaseSchema } from '@cdktf/provider-okta'

appUserBaseSchema.AppUserBaseSchema.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformElement"></a>

```typescript
import { appUserBaseSchema } from '@cdktf/provider-okta'

appUserBaseSchema.AppUserBaseSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformResource"></a>

```typescript
import { appUserBaseSchema } from '@cdktf/provider-okta'

appUserBaseSchema.AppUserBaseSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.masterInput">masterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userTypeInput">userTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.master">master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userType">userType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `masterInput`<sup>Optional</sup> <a name="masterInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.masterInput"></a>

```typescript
public readonly masterInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userTypeInput`<sup>Optional</sup> <a name="userTypeInput" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userTypeInput"></a>

```typescript
public readonly userTypeInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `master`<sup>Required</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserBaseSchemaConfig <a name="AppUserBaseSchemaConfig" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.Initializer"></a>

```typescript
import { appUserBaseSchema } from '@cdktf/provider-okta'

const appUserBaseSchemaConfig: appUserBaseSchema.AppUserBaseSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#app_id AppUserBaseSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.index">index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.title">title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.type">type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#id AppUserBaseSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.master">master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.pattern">pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.permissions">permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.userType">userType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#app_id AppUserBaseSchema#app_id}.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#index AppUserBaseSchema#index}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#title AppUserBaseSchema#title}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#type AppUserBaseSchema#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#id AppUserBaseSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `master`<sup>Optional</sup> <a name="master" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.master"></a>

```typescript
public readonly master: string;
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#master AppUserBaseSchema#master}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#pattern AppUserBaseSchema#pattern}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#permissions AppUserBaseSchema#permissions}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#required AppUserBaseSchema#required}

---

##### `userType`<sup>Optional</sup> <a name="userType" id="@cdktf/provider-okta.appUserBaseSchema.AppUserBaseSchemaConfig.property.userType"></a>

```typescript
public readonly userType: string;
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_base_schema#user_type AppUserBaseSchema#user_type}

---


