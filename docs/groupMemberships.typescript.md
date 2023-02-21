# `groupMemberships` Submodule <a name="`groupMemberships` Submodule" id="@cdktf/provider-okta.groupMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupMemberships <a name="GroupMemberships" id="@cdktf/provider-okta.groupMemberships.GroupMemberships"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/group_memberships okta_group_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer"></a>

```typescript
import { groupMemberships } from '@cdktf/provider-okta'

new groupMemberships.GroupMemberships(scope: Construct, id: string, config: GroupMembershipsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig">GroupMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig">GroupMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.resetTrackAllUsers">resetTrackAllUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTrackAllUsers` <a name="resetTrackAllUsers" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.resetTrackAllUsers"></a>

```typescript
public resetTrackAllUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.isConstruct"></a>

```typescript
import { groupMemberships } from '@cdktf/provider-okta'

groupMemberships.GroupMemberships.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.isTerraformElement"></a>

```typescript
import { groupMemberships } from '@cdktf/provider-okta'

groupMemberships.GroupMemberships.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.isTerraformResource"></a>

```typescript
import { groupMemberships } from '@cdktf/provider-okta'

groupMemberships.GroupMemberships.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.trackAllUsersInput">trackAllUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.trackAllUsers">trackAllUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.users">users</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `trackAllUsersInput`<sup>Optional</sup> <a name="trackAllUsersInput" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.trackAllUsersInput"></a>

```typescript
public readonly trackAllUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `trackAllUsers`<sup>Required</sup> <a name="trackAllUsers" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.trackAllUsers"></a>

```typescript
public readonly trackAllUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMemberships.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.groupMemberships.GroupMemberships.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupMembershipsConfig <a name="GroupMembershipsConfig" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.Initializer"></a>

```typescript
import { groupMemberships } from '@cdktf/provider-okta'

const groupMembershipsConfig: groupMemberships.GroupMembershipsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of a Okta group. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.users">users</a></code> | <code>string[]</code> | The list of Okta user IDs which the group should have membership managed for. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships#id GroupMemberships#id}. |
| <code><a href="#@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.trackAllUsers">trackAllUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | The resource concerns itself with all users added/deleted to the group; even those managed outside of the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of a Okta group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships#group_id GroupMemberships#group_id}

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

The list of Okta user IDs which the group should have membership managed for.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships#users GroupMemberships#users}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships#id GroupMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `trackAllUsers`<sup>Optional</sup> <a name="trackAllUsers" id="@cdktf/provider-okta.groupMemberships.GroupMembershipsConfig.property.trackAllUsers"></a>

```typescript
public readonly trackAllUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The resource concerns itself with all users added/deleted to the group; even those managed outside of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships#track_all_users GroupMemberships#track_all_users}

---



