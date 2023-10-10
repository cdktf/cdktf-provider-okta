# `okta_app_group_assignment`

Refer to the Terraform Registory for docs: [`okta_app_group_assignment`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment).

# `appGroupAssignment` Submodule <a name="`appGroupAssignment` Submodule" id="@cdktf/provider-okta.appGroupAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppGroupAssignment <a name="AppGroupAssignment" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment okta_app_group_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

new appGroupAssignment.AppGroupAssignment(scope: Construct, id: string, config: AppGroupAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig">AppGroupAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig">AppGroupAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetRetainAssignment">resetRetainAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: AppGroupAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRetainAssignment` <a name="resetRetainAssignment" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetRetainAssignment"></a>

```typescript
public resetRetainAssignment(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isConstruct"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

appGroupAssignment.AppGroupAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isTerraformElement"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

appGroupAssignment.AppGroupAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isTerraformResource"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

appGroupAssignment.AppGroupAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference">AppGroupAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.retainAssignmentInput">retainAssignmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.retainAssignment">retainAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: AppGroupAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference">AppGroupAssignmentTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `retainAssignmentInput`<sup>Optional</sup> <a name="retainAssignmentInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.retainAssignmentInput"></a>

```typescript
public readonly retainAssignmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppGroupAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `retainAssignment`<sup>Required</sup> <a name="retainAssignment" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.retainAssignment"></a>

```typescript
public readonly retainAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppGroupAssignmentConfig <a name="AppGroupAssignmentConfig" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.Initializer"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

const appGroupAssignmentConfig: appGroupAssignment.AppGroupAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.appId">appId</a></code> | <code>string</code> | App to associate group with. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.groupId">groupId</a></code> | <code>string</code> | Group associated with the application. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#id AppGroupAssignment#id}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.priority">priority</a></code> | <code>number</code> | Priority of group assignment. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.profile">profile</a></code> | <code>string</code> | JSON document containing [application profile](https://developer.okta.com/docs/reference/api/apps/#profile-object). |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.retainAssignment">retainAssignment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Retain the group assignment on destroy. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

App to associate group with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#app_id AppGroupAssignment#app_id}

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Group associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#group_id AppGroupAssignment#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#id AppGroupAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority of group assignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#priority AppGroupAssignment#priority}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

JSON document containing [application profile](https://developer.okta.com/docs/reference/api/apps/#profile-object).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#profile AppGroupAssignment#profile}

---

##### `retainAssignment`<sup>Optional</sup> <a name="retainAssignment" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.retainAssignment"></a>

```typescript
public readonly retainAssignment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Retain the group assignment on destroy.

If set to true, the resource will be removed from state but not from the Okta app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#retain_assignment AppGroupAssignment#retain_assignment}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppGroupAssignmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#timeouts AppGroupAssignment#timeouts}

---

### AppGroupAssignmentTimeouts <a name="AppGroupAssignmentTimeouts" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.Initializer"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

const appGroupAssignmentTimeouts: appGroupAssignment.AppGroupAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#create AppGroupAssignment#create}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#read AppGroupAssignment#read}. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#update AppGroupAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#create AppGroupAssignment#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#read AppGroupAssignment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_group_assignment#update AppGroupAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppGroupAssignmentTimeoutsOutputReference <a name="AppGroupAssignmentTimeoutsOutputReference" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { appGroupAssignment } from '@cdktf/provider-okta'

new appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppGroupAssignmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-okta.appGroupAssignment.AppGroupAssignmentTimeouts">AppGroupAssignmentTimeouts</a>

---



