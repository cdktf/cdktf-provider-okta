# `data_okta_user`

Refer to the Terraform Registory for docs: [`data_okta_user`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user).

# `dataOktaUser` Submodule <a name="`dataOktaUser` Submodule" id="@cdktf/provider-okta.dataOktaUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUser <a name="DataOktaUser" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUser;

DataOktaUser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .compoundSearchOperator(java.lang.String)
//  .delayReadSeconds(java.lang.String)
//  .id(java.lang.String)
//  .search(IResolvable)
//  .search(java.util.List<DataOktaUserSearch>)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipRoles(java.lang.Boolean)
//  .skipRoles(IResolvable)
//  .userId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.compoundSearchOperator">compoundSearchOperator</a></code> | <code>java.lang.String</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.delayReadSeconds">delayReadSeconds</a></code> | <code>java.lang.String</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.search">search</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>></code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipRoles">skipRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.userId">userId</a></code> | <code>java.lang.String</code> | Retrieve a single user based on their id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compoundSearchOperator`<sup>Optional</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.compoundSearchOperator"></a>

- *Type:* java.lang.String

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `delayReadSeconds`<sup>Optional</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.delayReadSeconds"></a>

- *Type:* java.lang.String

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.search"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#search DataOktaUser#search}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `skipRoles`<sup>Optional</sup> <a name="skipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipRoles"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.userId"></a>

- *Type:* java.lang.String

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#user_id DataOktaUser#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch">putSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator">resetCompoundSearchOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds">resetDelayReadSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles">resetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSearch` <a name="putSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch"></a>

```java
public void putSearch(IResolvable OR java.util.List<DataOktaUserSearch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>>

---

##### `resetCompoundSearchOperator` <a name="resetCompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator"></a>

```java
public void resetCompoundSearchOperator()
```

##### `resetDelayReadSeconds` <a name="resetDelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds"></a>

```java
public void resetDelayReadSeconds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId"></a>

```java
public void resetId()
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipRoles` <a name="resetSkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles"></a>

```java
public void resetSkipRoles()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId"></a>

```java
public void resetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUser;

DataOktaUser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUser;

DataOktaUser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUser;

DataOktaUser.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles">adminRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter">costCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes">customProfileAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division">division</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships">groupMemberships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix">honorificPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix">honorificSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager">manager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId">managerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName">nickName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress">postalAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage">preferredLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone">primaryPhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl">profileUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search">search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail">secondEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType">userType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode">zipCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput">compoundSearchOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput">delayReadSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput">searchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput">skipRolesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator">compoundSearchOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds">delayReadSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles">skipRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `adminRoles`<sup>Required</sup> <a name="adminRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles"></a>

```java
public java.util.List<java.lang.String> getAdminRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `costCenter`<sup>Required</sup> <a name="costCenter" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter"></a>

```java
public java.lang.String getCostCenter();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `customProfileAttributes`<sup>Required</sup> <a name="customProfileAttributes" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes"></a>

```java
public java.lang.String getCustomProfileAttributes();
```

- *Type:* java.lang.String

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber"></a>

```java
public java.lang.String getEmployeeNumber();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `groupMemberships`<sup>Required</sup> <a name="groupMemberships" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships"></a>

```java
public java.util.List<java.lang.String> getGroupMemberships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `honorificPrefix`<sup>Required</sup> <a name="honorificPrefix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix"></a>

```java
public java.lang.String getHonorificPrefix();
```

- *Type:* java.lang.String

---

##### `honorificSuffix`<sup>Required</sup> <a name="honorificSuffix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix"></a>

```java
public java.lang.String getHonorificSuffix();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager"></a>

```java
public java.lang.String getManager();
```

- *Type:* java.lang.String

---

##### `managerId`<sup>Required</sup> <a name="managerId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId"></a>

```java
public java.lang.String getManagerId();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

---

##### `nickName`<sup>Required</sup> <a name="nickName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName"></a>

```java
public java.lang.String getNickName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress"></a>

```java
public java.lang.String getPostalAddress();
```

- *Type:* java.lang.String

---

##### `preferredLanguage`<sup>Required</sup> <a name="preferredLanguage" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage"></a>

```java
public java.lang.String getPreferredLanguage();
```

- *Type:* java.lang.String

---

##### `primaryPhone`<sup>Required</sup> <a name="primaryPhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone"></a>

```java
public java.lang.String getPrimaryPhone();
```

- *Type:* java.lang.String

---

##### `profileUrl`<sup>Required</sup> <a name="profileUrl" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl"></a>

```java
public java.lang.String getProfileUrl();
```

- *Type:* java.lang.String

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search"></a>

```java
public DataOktaUserSearchList getSearch();
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a>

---

##### `secondEmail`<sup>Required</sup> <a name="secondEmail" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail"></a>

```java
public java.lang.String getSecondEmail();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `userType`<sup>Required</sup> <a name="userType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType"></a>

```java
public java.lang.String getUserType();
```

- *Type:* java.lang.String

---

##### `zipCode`<sup>Required</sup> <a name="zipCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode"></a>

```java
public java.lang.String getZipCode();
```

- *Type:* java.lang.String

---

##### `compoundSearchOperatorInput`<sup>Optional</sup> <a name="compoundSearchOperatorInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput"></a>

```java
public java.lang.String getCompoundSearchOperatorInput();
```

- *Type:* java.lang.String

---

##### `delayReadSecondsInput`<sup>Optional</sup> <a name="delayReadSecondsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput"></a>

```java
public java.lang.String getDelayReadSecondsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput"></a>

```java
public java.lang.Object getSearchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>>

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipRolesInput`<sup>Optional</sup> <a name="skipRolesInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput"></a>

```java
public java.lang.Object getSkipRolesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `compoundSearchOperator`<sup>Required</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator"></a>

```java
public java.lang.String getCompoundSearchOperator();
```

- *Type:* java.lang.String

---

##### `delayReadSeconds`<sup>Required</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds"></a>

```java
public java.lang.String getDelayReadSeconds();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipRoles`<sup>Required</sup> <a name="skipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles"></a>

```java
public java.lang.Object getSkipRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUserConfig <a name="DataOktaUserConfig" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUserConfig;

DataOktaUserConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .compoundSearchOperator(java.lang.String)
//  .delayReadSeconds(java.lang.String)
//  .id(java.lang.String)
//  .search(IResolvable)
//  .search(java.util.List<DataOktaUserSearch>)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipRoles(java.lang.Boolean)
//  .skipRoles(IResolvable)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator">compoundSearchOperator</a></code> | <code>java.lang.String</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds">delayReadSeconds</a></code> | <code>java.lang.String</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search">search</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>></code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles">skipRoles</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId">userId</a></code> | <code>java.lang.String</code> | Retrieve a single user based on their id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compoundSearchOperator`<sup>Optional</sup> <a name="compoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator"></a>

```java
public java.lang.String getCompoundSearchOperator();
```

- *Type:* java.lang.String

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `delayReadSeconds`<sup>Optional</sup> <a name="delayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds"></a>

```java
public java.lang.String getDelayReadSeconds();
```

- *Type:* java.lang.String

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search"></a>

```java
public java.lang.Object getSearch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#search DataOktaUser#search}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `skipRoles`<sup>Optional</sup> <a name="skipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles"></a>

```java
public java.lang.Object getSkipRoles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#user_id DataOktaUser#user_id}

---

### DataOktaUserSearch <a name="DataOktaUserSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUserSearch;

DataOktaUserSearch.builder()
//  .comparison(java.lang.String)
//  .expression(java.lang.String)
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison">comparison</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#comparison DataOktaUser#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression">expression</a></code> | <code>java.lang.String</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name">name</a></code> | <code>java.lang.String</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#value DataOktaUser#value}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#comparison DataOktaUser#comparison}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#expression DataOktaUser#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#name DataOktaUser#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/data-sources/user#value DataOktaUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaUserSearchList <a name="DataOktaUserSearchList" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUserSearchList;

new DataOktaUserSearchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get"></a>

```java
public DataOktaUserSearchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>>

---


### DataOktaUserSearchOutputReference <a name="DataOktaUserSearchOutputReference" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_user.DataOktaUserSearchOutputReference;

new DataOktaUserSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>

---



